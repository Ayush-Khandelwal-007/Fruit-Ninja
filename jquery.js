var isPlaying=false;
var score =0;
var lives;
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
            for(i=0; i<3 ; i++){
                $("#life").append("H ");        
            }
        }
    });
});