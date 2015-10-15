/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	findByEmail:function(req,res){
		console.log(req.allParams().email);
		User.findOne({email:req.allParams().email}).exec(function(err,user){
			if(err) 
				return res.badRequest("Invalid parameters");
			if(!user) 
				return res.notFound("User doesn't exist!");
			return res.json(200,user);
		});
	}
};

