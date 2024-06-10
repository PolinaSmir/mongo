db.products.aggregate([
  {
    $lookup: {
      from: "manufacturers",
      localField: "manufacturerId",
      foreignField: "_id",
      as: "manufacturer",
    },
  },
  {
    $unwind: {
      path: "$manufacturer",
    },
  },
  {
    $unset: "manufacturerId",
  },
  {
    $group: {
      _id: "$manufacturer.name",
      productsQuantity: {
        $count: {},
      },
    },
  },
]);

// lookup
// from - назва колекції з якої потрібно отримати дані для об єднання (права таблиця)
// localField - поле в вихідній колекції, по якому буде відбуватись з єднання
// foreignField - поле в зовнішній колекції, по якому буде відбуватись з єднання
// as - псевдонім для результуючого масиву після об єднання

// unwind
// path - поле, яке містить масив, який потрібно розкрутити

// unset
// може приймати просто одне поле, яке потрібно виключити з результату
// або може приймати масив полів, які потрібно виключити з результату

// Pagination
// 1   2   3   4   5   6   7   8   9   10
// db.products.find().skip(2).limit(5);
// 3   4   5   6   7
