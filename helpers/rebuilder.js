const rebuildCategories = (categories) => {
  const categoriesWithNote = categories.filter((item) => item.noteid);
  const categoriesWithoutNote = categories
    .filter((item) => !item.noteid)
    .map((item) => ({ categoryId: item.categoryid, categoryTitle: item.categorytitle, notes: [] }));

  const result = categoriesWithNote.reduce((acc, item) => {
    const existedObjectWithCategoryId = acc.categories
      .find((category) => category.categoryId === item.categoryid);

    if (existedObjectWithCategoryId) {
      return {
        ...acc,
        categories: acc.categories.map((category) => {
          if (category.categoryId === existedObjectWithCategoryId.categoryId) {
            return {
              ...category,
              notes: [...category.notes, {
                noteId: item.noteid,
                noteTitle: item.notetitle,
                noteDescription: item.notedescription,
              }],
            };
          }

          return category;
        }),
      };
    }

    return {
      ...acc,
      categories: [...acc.categories, {
        categoryId: item.categoryid,
        categoryTitle: item.categorytitle,
        notes: [{
          noteId: item.noteid,
          noteTitle: item.notetitle,
          noteDescription: item.notedescription,
        }],
      }],
    };
  }, {
    categories: [],
  });

  return [...result.categories, ...categoriesWithoutNote];
};

module.exports = {
  rebuildCategories,
};
