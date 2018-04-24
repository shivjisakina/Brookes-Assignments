$(".red").click(function(){
    $(this).css("background-color", "black")
    $(this).appendTo(".all");
    $(this).text("hello");
    $(this).css("color", "skyblue")
    $( ".red" ).animate({
        top: "400px",
        position: "absolute"
      }, 5000);

})


$(".blue").click(function(){
    $(this).appendTo(".all");
})

$(".green").click(function(){
    $(this).appendTo(".all");
})