const basicController = {};

basicController.get = (req, res) => {
  res.json({
    message: 'Woo API'
  });
};

module.exports = basicController;
