$("img").hide();

$("button").click(function(){
    $(".button").hide();

     var mood = $(".mood").val();
     var year = $(".year").val();
     if(mood === "laidback" && year>2003){
        $("#elmo").show();
     } else if(mood==="energetic"&&year<2003){
      $("#abby").show();
     } else if(mood=== "laidback"&&year>2003){
         $("#bigBird").show();
     } else if(mood=== "energetic"&& year<2003){
      $("#oscar").show();
     } else{
         
         
     }
});

