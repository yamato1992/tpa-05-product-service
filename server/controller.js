const product = require('./product');

const showProducts = function(req, res) {
    res.send({ 'products': product.getProducts()});
}

const calcTotalPrice = function(req, res) {
    const productIds = req.query.ids.split(',').map(strId => parseInt(strId));
    const totalPrice = product.getTotalPrice(productIds);
    res.send({
        'productIds': productIds,
        'total': totalPrice
    });
}

module.exports = { showProducts, calcTotalPrice };
