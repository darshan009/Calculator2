
var soap = require('soap');
var baseURL = "http://localhost:8080/Calculator-Server/services";

exports.getHome = function(req, res){
  res.render('index', { title: 'Express' });
};


exports.postHome = function(req, res){
  var buttonValue = req.param("buttonValue"),
      fullString = req.param("fullString");

  console.log("in  buttonclick");
  console.log(buttonValue);
  console.log(Number.isInteger(buttonValue));
  console.log(buttonValue + 1);
  var isInteger = parseInt(buttonValue);
  console.log(Number.isInteger(isInteger));
  console.log("in displayu value");
  fullString = fullString + buttonValue;
 
  
	  var option = {
			ignoredNamespaces : true	
		};
	  var url = baseURL+"/Calculate?wsdl";
	  var args = {buttonValue: req.param('buttonValue'),fullString: req.param('fullString')};
	  soap.createClient(url,option, function(err, client) {
		  console.log(client);
	      client.postHome(args, function(err, result) {
	    	  console.log("------after calculate------");
	    	  console.log("tp check");
	    	  
	    	  console.log(result);
	    	  
	    	  var jsonResponse = {"fullString": result};
	    	  res.send(jsonResponse);

	      });
	  });

};

exports.calculate = function(req, res) {
  var fullString = req.param("fullString");
      calc = eval(fullString);
  
	var option = {
			ignoredNamespaces : true	
		};
	 var url = baseURL+"/Calculate?wsdl";
	  var args = {fullString: req.param('fullString')};
	  
	  soap.createClient(url,option, function(err, client) {
	      
		  client.calculated(args, function(err, result) {
			  console.log("calculated");
	    	  console.log(result);
	    	  var jsonResponse = {"calc": calc};
	    	  res.send(jsonResponse);
	      });
		  
	  });
  
  
};
