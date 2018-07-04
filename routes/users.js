/*jslint node: true, nomen: true*/
"use strict";

module.exports = function (express, logger, config) {
	
	var path = require('path'),
	    router = express.Router(),
	    usersController = require(path.join('..', 'controllers', 'usersController'))(logger, config);

	/* GET users listing. */
	router.post('/', function (req, res) {
		if(req.body){
			logger.info('Requesting Saltie list', req.body);
			usersController.getUsers(function (err, saltieList) {
				if (err) {
					res.status(err.status).json({
						message: err.message
					});
				} else {
					res.status(200).json(saltieList);
				}
	
			});
		}else{
			res.status(400).json({
				message: "Request Body Empty"
			});
		}

	});
	
	return router;
};