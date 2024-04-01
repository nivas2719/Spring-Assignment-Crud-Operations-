
var Registration = angular.module('RegistrationModule', []);
Registration.controller('RegistrationController', ['$http','$scope', function($http, $scope) {
	
	
			// User Registration Module
			$scope.registration = function(UserData) {
				alert(UserData.myname + ' Registration Successful');
				$http.post('/myspring/user/add', UserData).then(
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
			$scope.getById = function(myname){
				alert(myname);
				$http.post('/myspring/user/getById', myname).then(
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
			$scope.updateData = function(UserData){
				alert(UserData.myname);
				$http.post('/myspring/user/updateData', UserData).then(
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
			$http.post('/myspring/user/getAll').then(function(response) {
				$scope.data = response.data;
				if ($scope.data.successful) {
					$scope.userdetails = $scope.data.responseObject;
				} else {
					alert("Can't view the Data");
				}
			}, function(errResponse) {
				console.error('Error while viewing notes');
			});

			// Delete UserData based on Name
			$scope.removeData = function(name) {
				$http.post('/myspring/user/removeData', name).then(
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
			
		
		} ]);
