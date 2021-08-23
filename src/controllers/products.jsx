exports.createProduct = (req, res, next) => {
  res.json(
        {
            title: 'Harry Potter',
            content: 'Youtube',
            category: 'Fiksi',
            status: 'Success'
        }
    );
        next();
}

exports.getAllProduct = (req, res, next) => {
    res.json(
        {
            title: 'Harry Potter II',
            content: 'Youtube',
            category: 'Fiksi',
            status: 'Success'
        }
    );
        next();
}