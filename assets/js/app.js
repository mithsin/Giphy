<!DOCTYPE html>
<html>
	<head>
		<title>Everything MY House API</title>
		<!--<link type='text/css' rel='stylesheet' href='assets/css/style.css'/>-->
		<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open Sans"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	</head>
 <body>
<div id="button_area"></div>

  <form id="car-form">
    <label for="car-input">Add</label>
    <input type="text" id="car-input"><br>

    <input id="add" type="submit" value="Submit">
  </form>

<div id="superCars"></div>
<script>
$(document).ready(function(){
//array 
var superCar = ["Bugatti", "Lamborghini", "McLaren", "Ferrari", "Aston Martin"];

//create button

    
function makeButton(){
    $("#button_area").empty();
    
    for (var i = 0; i < superCar.length; i++){
        var btn = $("<button>");
        btn.addClass(".car-button");
        btn.attr("data-brand", superCar[i]);
        btn.text(superCar[i]);
        $("#button_area").append(btn);
    }
}
  makeButton();
    $(document).on("click", function(){
        $("#superCars").empty();
        $(".car-button").removeClass("active");
        $(this).addClass("active");
        
        var type = $(this).attr("data-brand");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&limit=25";
        
        $.ajax({
        url: queryURL,
        method: "GET"
        }).done(function(target){
        var result = target.data;
            
            for (var i = 0 ; i < result.length; i ++){
            var carDiv = $("<div class='car-style'>");
            var rating = result[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var anime = result[i].images.fixed_height;
            var still = result[i].images.fixed_height_still;
                
                var showImg = $("<img>");
                 showImg.attr("src", still);
                 showImg.attr("data-still", still);
                 showImg.attr("data-anime", anime);
                 showImg.attr("data-state", "still");
                 showImg.addClass("car-img");
                
                carDiv.append(showImg);
                carDiv.append(p);
                
                $("#superCars").append(carDiv);
            }
        });
    });
  
});//document.ready
</script>

 </body>
</html>`    