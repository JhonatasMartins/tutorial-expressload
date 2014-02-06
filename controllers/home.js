/*
 * Home Controller
 */

module.exports = function(app){

    var index = function(req, res){
    	res.render('index.html');   		   
    };

    return {
    		index: index  
    };

};