var isPlaying=false;
var score =0;
var lives;
var dropSpeed=1;
var action;

var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange', 'peach', 'pear', 'pineapple','tomato','watermelon'];
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
            $("#container").css({'display':'flex'});
            lives=3;
            addHeart();
            startFruits();
        }
    });
    
    $("#restart").click(function(){
        location.reload();
    });
});

$("#fruit").mouseover(function(){
    score++;
    $("#value").html(score);
    if(dropSpeed<=10){dropSpeed+=1;}
    $("#slicesound")[0].play();
    $("#fruit").hide("explode", 500); console.log("1");
    $("#fruit").css({'display':'flex'});
    clearInterval(action);
    
    setTimeout(startFruits, 800);
});

function addHeart(){
    $("#life").empty();
    for(i=0;i<lives;i++){
        $("#life").append(`<img src="images/heart.png" class="heart">`);
    }
}

function startFruits(){
    chooseFruit();
    $("#fruit").css({'left' : Math.round(($("#container").width()-350)*Math.random())+200, 'top' : -50});
    $("#fruit").css({'display':'flex'});

    dropSpeed+=1;
    action = setInterval(function(){
        
        $("#fruit").css('top', $("#fruit").position().top + dropSpeed);
        if($("#fruit").position().top > $("#container").height()){
            
            if(lives > 1 ){
                
                $("#fruit").css({'display':'flex'});
                chooseFruit();
                $("#fruit").css({'left' : Math.round(($("#container").width()-350)*Math.random())+200, 'top' : -50});
                
                lives-=1;
                
                addHeart();
                
            }else{ 
                playing = false;
                $("#fsc").text(score);
                lives-=1;
                
                addHeart();
                $("#endgame").show();
                stopAction();
            }
        }
    },10)
}

function chooseFruit(){
    $("#fruit").attr('src' , 'images/' + fruits[Math.round(9*Math.random())] +'.png');
}

function stopAction(){
    clearInterval(action);
    $("#fruit").hide();console.log("2");
}