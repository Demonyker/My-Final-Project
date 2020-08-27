const rebuildCategories = (categories) => {
  const categoriesWithNote = categories.filter(item => item.noteid);
  const categoriesWithoutNote = categories.filter(item => !item.noteid).map(item => ({ categoryid: item.categoryid, categorytitle: item.categorytitle, notes: [] }));

  const result = categoriesWithNote.reduce((acc, item) => {
    const existedObjectWithCategoryId = acc.categories.find(category => category.categoryid === item.categoryid);

    if (existedObjectWithCategoryId) {
      console.log(acc.categories)
      return {
        ...acc,
        categories: acc.categories.map(category => {
          if(category.categoryid === existedObjectWithCategoryId.categoryid) {
            return {
              ...category,
              notes: [...category.notes, {
                noteid: item.noteid,
                notetitle: item.notetitle,
                notedescription: item.notedescription,
              }]
            }
          }

          return category;
        })
      }
    };

        
    return {
      ...acc,
      categories: [...acc.categories, {
        categoryid: item.categoryid,
        categorytitle: item.categorytitle,
        notes: [{
          noteid: item.noteid,
          notetitle: item.notetitle,
          notedescription: item.notedescription,
        }]
      }]
    }
  }, {
    categories: [],
  })

  return [...result, ...categoriesWithoutNote];
}

module.exports = {
  rebuildCategories,
}