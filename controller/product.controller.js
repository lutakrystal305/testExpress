var db= require('../db');

module.exports.index= function(req, res) {
	var page= parseInt(req.query.page)|| 1;
	var perPage= 8;
	var begin= (page-1)*perPage;

	var nextPage={};
	var prePage= {};

	nextPage.url='/products?page='+(page+1);
	nextPage.number= page+1;

	prePage.url='/products?page='+(page-1);
	prePage.number= page-1;

	if ((db.get('products').size() % perPage) !==0) {
		endPage= parseInt(Math.floor(db.get('products').size()/perPage)+1);
	}
	else {
		endPage=db.get('products').size()/perPage;
	}


	var start= (page-1)*perPage;
	var end= page*perPage;

	res.render('products/index', {
		products: db.get('products').drop(begin).take(perPage).value(),
		currentPage: page,
		nextPage: nextPage,
		prePage: prePage,
		topUrl: '/products?page=1',
		endPage: {
			url: '/products?page=' + endPage,
			number: endPage
		}
	});
};