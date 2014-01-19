function CalendarDataCtrl($scope) {

  $scope.entries = [
    {text:'workshop', min:'-15', max:'15'},
    {text:'next event', min:'-10', max:'20'},
	{text:'further event', min:'-12', max:'13'}];

};

function WeatherDataCtrl($scope, $http) {

    var place = 'Helsinki';    

    $scope.entries = [];

    $.ajax({
        type: "GET",
        url: './python/' + place + '.json',
        async: false,
        success: function (data) {
            $("<div class='alert alert-success alert-dismissable'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>Ok!</strong> Weather data refresh was succesfull</div>").appendTo("#status");
            $scope.entries = JSON.toString(data);            
        },
        error: function (data) {
            $("<div class='alert alert-warning alert-dismissable'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>Warning!</strong> Weather data refresh was NOT succesfull</div>").appendTo("#status");                        
        }
    });
    
    alert($scope.entries);
    
/*	$.ajax({
		type: "GET",
		url: "./python/" + place + ".json",
		dataType: "json",
		success: function(data) {
			$("<div class='alert alert-success alert-dismissable'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>Ok!</strong> Weather data refresh was succesfull</div>").appendTo("#status");
			$scope.entries = data;
			alert(JSON.stringify($scope.entries));
		},
		error: function(data) {
			$("<div class='alert alert-warning alert-dismissable'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>Warning!</strong> Weather data refresh was NOT succesfull</div>").appendTo("#status");
		    // failed
			alert(JSON.stringify($scope.entries));
		}
	});
	
	alert(JSON.stringify($scope.entries));*/
};

