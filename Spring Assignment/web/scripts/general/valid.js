var validModle = angular.module('valid', []);
            
validModle.controller('mainController', ['$scope', '$http', function ($scope, $http ) {  
	
	  $scope.save=function(formData){
	///console.log(formData.username);
	 if(formData==null || formData=='' || formData==undefined)
	  {
	  	swal("Enter all details!");
	  }
	
	 else if(formData.firstname == null || formData.firstname == '' || formData.firstname == undefined)
	  {
	  	swal("Enter First Name!");
	  }
	 else if(formData.username == null || formData.username == '' || formData.username == undefined)
	  {
	  	swal("Enter User Name!");
	  }
	
		   alert(formData.username + ' Registration Successful');
			$http.post('/myspring/register/add', formData).then(
					function(response) {
						$scope.data = response.data;
						if ($scope.data.successful) {
							location.reload();
							alert("User Data Inserted Successfully");
						} else {
							alert("Data not inserted");
						}
					}, function(errResponse) {
						console.error('Error while fetching notes');
					});
	  }
	 
	  $scope.bcd=function(data){
			 console.log("haiiiiiiiiiiiiiiiiiii");
			  var a=data.qualification;
			  console.log(a);
			//Create and append the options
			  if(a == "B.Tech"){
				  $("#bt").show();
				  $("#dg").hide();
				  $("#it").hide();
				  $("#emt").hide();
				  
		  }
			  else if(a == "Degree"){
				
				  $("#bt").hide();
				  $("#dg").show();
				  $("#it").hide();
				  $("#emt").hide();
				  }
			  else if(a == "Intermediate"){
				
				  $("#bt").hide();
				  $("#dg").hide();
				  $("#it").show();
				  $("#emt").hide();
				  }
			 
		  }
	  
	  
	// View Data from Database
		$http.post('/myspring/register/getAll').then(function(response) {
			$scope.data = response.data;
			if ($scope.data.successful) {
				$scope.RegisterDetails = $scope.data.responseObject;
			} else {
				alert("Can't view the Data");
			}
		}, function(errResponse) {
			console.error('Error while viewing notes');
		});
	  
	  
		//Get Data from Database based on Name
		$scope.getById = function(username) {
			alert(username);
			 //$("#pa").hide();
			$http.post('/myspring/register/getById', username).then(
					function(response) {
						console.log(response.data);
						$scope.data = response.data;
						console.log($scope.data);
						if ($scope.data.successful) {
							$scope.data = {
								object : $scope.data.responseObject
							};
							
						} else {
							alert("Error while getting data");
						}
					}, function(errResponse) {
						console.error('Error while fetching notes');
					});
		};
	  
		//Update User Details
		$scope.updateData = function(FormData){
			
			alert(FormData.username);
			$http.post('/myspring/register/updateData', FormData).then(
					function(response) {
						$scope.data = response.data;
						if ($scope.data.successful) {
							alert("User Details Successfully updated");
						} else {
							alert("Data not updated");
						}
					}, function(errResponse) {
						console.error('Error while fetching notes');
					});
		};
   
 
		// Delete UserData based on Name
		$scope.removeData = function(username) {
			console.log("haiiiiiiiiiii");
			$http.post('/myspring/register/removeData', username).then(
					function(response) {
						$scope.data = response.data;
						if ($scope.data.successful) {
							location.reload();
							alert("User Data removed Successfully");
						} else {
							alert("Data not Deleted");
						}
					}, function(errResponse) {
						console.error('Error while fetching notes');
					});
		};

		
  }]);

 


	

	
	
	
       
       /*   
      	// User Registration Module
      	alert(formData.username + ' Registration Successful');
		$http.post('/myspring/register/add', formData).then(
				function(response) {
					$scope.data = response.data;
					if ($scope.data.successful) {
						location.reload();
						alert("User Data Inserted Successfully");
					} else {
						alert("Data not inserted");
					}
				}, function(errResponse) {
					console.error('Error while fetching notes');
				});          
          
};
		//Get Data from Database based on Name
		$scope.getById = function(username){
			alert(username);
			$http.post('/myspring/register/getById', username).then(
					function(response) {
						$scope.data = response.data;
						if ($scope.data.successful) {
							$scope.data={object:$scope.data.responseObject};
						} else {
							alert("Error while getting data");
						}
					}, function(errResponse) {
						console.error('Error while fetching notes');
					});
		};
		
		
		//Update User Details
		$scope.updateData = function(formData){
			alert(formData.username);
			$http.post('/myspring/register/updateData', formData).then(
					function(response) {
						$scope.data = response.data;
						if ($scope.data.successful) {
							alert("User Details Successfully updated");
						} else {
							alert("Data not updated");
						}
					}, function(errResponse) {
						console.error('Error while fetching notes');
					});
		};

		// View Data from Database
		$http.post('/myspring/register/getAll').then(function(response) {
			$scope.data = response.data;
			if ($scope.data.successful) {
				$scope.RegisterDetails = $scope.data.responseObject;
			} else {
				alert("Can't view the Data");
			}
		}, function(errResponse) {
			console.error('Error while viewing notes');
		});

		// Delete UserData based on Name
		$scope.removeData = function(username) {
			$http.post('/myspring/register/removeData', username).then(
					function(response) {
						$scope.data = response.data;
						if ($scope.data.successful) {
							location.reload();
							alert("User Data removed Successfully");
						} else {
							alert("Data not Deleted");
						}
					}, function(errResponse) {
						console.error('Error while fetching notes');
					});
		
		};  
          
	  



$scope.bcd=function(data){
		 // console.log(data.qual);
		  
		  var array = ["Select","ECE","CSE","IT","EEE","Mech","Civil"];
		  var array1= ["Select","BSc","B.Com"];
		  var array2= ["Select","MPC","BiPC","CEC","HEC","MEC"];
		  
		  var id=document.getElementById("q");

		  var a=data.qual;
		//Create and append the options
		  if(a == "B.Tech"){
			  document.getElementById('q').options.length = 0;
		for (var i = 0; i < array.length; i++) {
		    var option = document.createElement("option");
		    option.value = array[i];
		    option.text = array[i];
		    id.appendChild(option);
		}
			  $("#bt").show();
			  $("#dg").hide();
			  $("#it").hide();
			  $("#emt").hide();
			  
	  }
		  else if(a == "Degree"){
			  document.getElementById('q').options.length = 0;
				for (var i = 0; i < array1.length; i++) {
					
				    var option = document.createElement("option");
				    option.value = array1[i];
				    option.text = array1[i];
				    id.appendChild(option);
				}
			  $("#bt").hide();
			  $("#dg").show();
			  $("#it").hide();
			  $("#emt").hide();
			  }
		  else if(a == "Intermediate"){
			  document.getElementById('q').options.length = 0;
				for (var i = 0; i < array2.length; i++) {
				    var option = document.createElement("option");
				    option.value = array2[i];
				    option.text = array2[i];
				    id.appendChild(option);
				}
			  $("#bt").hide();
			  $("#dg").hide();
			  $("#it").show();
			  $("#emt").hide();
			  }
		 
	  }

 









  }]);*/




