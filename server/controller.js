//
// TODO
//
// APIルーターのハンドラーをここに定義して実装する
//
const product = require('./product');

const show = function(req, res) {
    res.send({ 'products': product.getProducts()});
}

module.exports = { show };
