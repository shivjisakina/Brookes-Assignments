**Homework for 11-4

* For this weeks homework assignment, youre going to finish implementing the weather API

* In last weeks session, we added a text box for the users City of choice using bootstrap. We then got the value using jQuery, and replaced it in the AJAX query.

* For this weeks assignment, I would like you to do the same thing with the number of days.

    - Add a class/id to your HTML dropdown for the number of days
    - Use jQuery to get the value of the dropdown
    - Store the value in a global variable
    - Replace the hardcoded number of days (5) with your new variable in your AJAX url
    - Test by choosing different numbers in the dropdown, and see if it shows the right information!

    **Bonus:

    - If you finish the tasks above, you can also finish sending the Sunrise and Sunset times HTML
    - Using the .append() jQuery method, append your sunrise and sunset variables to your "NYCWeather" class in HTML

    Example using temperature: 
    - $(".NYCWeather").append("<div> Temperature: "+weather[i].mintempF +"-"+ weather[i].maxtempF+"</div>")
    
#Homework for 11-11

1) Using the .append() jQuery method, append your sunrise and sunset variables to your "NYCWeather" class in HTML

    (Example using temperature: $(".NYCWeather").append("<div> Temperature: "+weather[i].mintempF +"-"+ weather[i].maxtempF+"</div>"))

2) Using either bootstrap of CSS, style the temperature and sunrise-sunset on your page

3) Finish up any overall CSS styling and make sure the app is ready to go!

Let me know if you have any questions, good luck :)
