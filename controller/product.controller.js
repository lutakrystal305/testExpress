var Product= require('../models/product.model');

module.exports.index= async function(req, res) {
	/*var products = await Product.find();
	var count = await Product.countDocuments();
	var page= parseInt(req.query.page)|| 1;
	var perPage= 8;
	var begin= (page-1)*perPage;

	var nextPage={};
	var prePage= {};

	nextPage.url='/products?page='+(page+1);
	nextPage.number= page+1;

	prePage.url='/products?page='+(page-1);
	prePage.number= page-1;

	if ((count % perPage) !==0) {
		endPage= parseInt(Math.floor(count/perPage)+1);
	}
	else {
		endPage=count/perPage;
	}


	var start= (page-1)*perPage;
	var end= page*perPage;
	var productsN=await Product.find().limit(perPage).skip(begin);
	res.render('products/index', {
		products: productsN,
		currentPage: page,
		nextPage: nextPage,
		prePage: prePage,
		topUrl: '/products?page=1',
		endPage: {
			url: '/products?page=' + endPage,
			number: endPage
		}
	})*/
	var products = await Product.find();
	res.render('products/index', {
		products: products
	});
};