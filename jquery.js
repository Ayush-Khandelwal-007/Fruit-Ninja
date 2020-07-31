var isPlaying=false;
var score =0;
var lives;

var fruits = ['apple', 'banana', 'papaya', 'grapes', 'mango', 'orange', 'peach', 'pear', 'pineapple','tomato','watermelon'];
$(function(){
    
    $("#start").click(function(){
        if(isPlaying==true){
            location.reload();
        }
        else{
            isPlaying=true;
            score=0;
            $("#value").html(score);
            $("#menubar").hide();
            $("#container").show();
            lives=3;
            addHeart();
            startFruits();
        }
    });
});

function addHeart(){
    for(i=0;i<lives;i++){
        $("#life").append(`<img src="images/heart.png" class="heart">`);
    }
}

function startFruits(){

}