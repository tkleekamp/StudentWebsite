$(document).ready(function() {
    var apiKey = "70909335c14eeba94220180d62169540" // Enter your API Key here
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url


    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop
    var i = 0;
    for (var key in state_info){
      (function(key){
            var state = state_info[key];
            var latitude = state.lat;
            var longitude = state.lng;

      var url =`https://api.darksky.net/forecast/70909335c14eeba94220180d62169540/${latitude},${longitude}`;

      $.ajax({url:url, dataType:"jsonp"}).then(function(data) {

                console.log(data)
                var temperature = null
                var temperature = data.currently.temperature;
                // TODO
                // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9.
                // var temperature =

                console.log(temperature)
                  $('#'+key).css('fill', "#808080");

               if(temperature <= 10){
                   $('#' + key).css('fill', "#6495ED");
               }
               else if(temperature >= 11 && temperature <= 20){
                   $('#' + key).css('fill', "#7FFFD4");
               }
               else if(temperature >= 21 && temperature <= 30){
                   $('#' + key).css('fill', "#0000FF");
               }
               else if(temperature >= 31 && temperature <= 40){
                   $('#' + key).css('fill', "#008B8B");
               }
               else if(temperature >= 41 && temperature <= 50){
                   $('#' + key).css('fill', "#00BFFF");
               }
               else if(temperature >= 51 && temperature <= 60){
                   $('#' + key).css('fill', "#F08080");
               }
               else if(temperature >= 61 && temperature <= 70){
                   $('#' + key).css('fill', "#CD5C5C");
               }
               else if(temperature >= 71 && temperature <= 80){
                   $('#' + key).css('fill', "#8B0000");
               }
               else if(temperature >= 81 && temperature <= 90){
                   $('#' + key).css('fill', "#B22222");
               }
               else if(temperature > 90){
                   $('#' + key).css('fill', "#FF0000");
               }

               //$('#CO').css('fill', "blue");

         });
     })(key);
 }

});
