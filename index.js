let playing = false;
let score;
let action;
let timrem;
let correct;

// alert("please press -reset- twice when refreshing for new game! - JambaDev");

//document hide and show quick function
function hide(Id){
    document.getElementById(Id).style.display = "none";
   }
   //show an element
   function show(Id){
    document.getElementById(Id).style.display = "block";
   }

//clicking start button to play game
document.getElementById("start").onclick = function () {

    if (playing == true) {
        //refresh page
        location.reload();

    } else {

        playing = true;

        score = 0;
        //set score
        document.getElementById("scorevalue").innerHTML = score;

        //initialise time
        document.getElementById("time").style.display = "block";
        timerem = 60;

        document.getElementById("timeremaining").innerHTML = timerem;

        document.getElementById("start").innerHTML = "Reset"

        countdown();

        generateQ();


    }
    //correct answer
    for(i=1; i<5; i++){
        document.getElementById("box"+i).onclick = function(){
        //check if we are playing
        if(playing == true){//yes
        if(this.innerHTML == correct){
        //correct answer
       
        //increase score by 1
        score++;
       
       document.getElementById("scorevalue").innerHTML = score;
        //hide wrong box and show correct box
        hide("wrong");
        show("correct");
        //function for duration
        setTimeout(function(){
        hide("correct");
        }, 1000);
       
        //Generate new Q&A
       
        generateQ();
        }else{
        //wrong answer
        hide("correct");
        show("wrong");
        setTimeout(function(){
        hide("wrong");
        }, 1000);
        }
        }
       }
       }
   


    //reduce timer by 1
    function countdown() {
        action = setInterval(function () {

            //countdown
            timerem -= 1;
            document.getElementById("timeremaining").innerHTML = timerem;
            //when counter reaches zero
            if (timerem == 0) {
                clearInterval(action);
                document.getElementById("gameOver").style.display = "block";
                //game over element
                document.getElementById("gameOver").innerHTML = "<p>GAME OVER!</p><P>Your score is " + score + " </P>"

                show("gameText");
                scoreText(score);

                document.getElementById("scorevalue").innerHTML = score;
                playing = false;
            }

        }, 1000)
    }

    function generateQ() {

        //generate numbers
        let x = 1 + Math.round(19 * Math.random() );
        let y = 1 +Math.round(19 * Math.random());

        //question
        correct = x * y;
        document.getElementById("question").innerHTML = x + "x" + y;


        let pos = 1 + Math.round(3 * Math.random());
        //correct answer in box
        document.getElementById("box" + pos).innerHTML = correct;


        //generate wrong answer
        for (i = 1; i < 5; i++) {
            //if not in correct box generate wrong answer
            if (i !== pos) {
                let trick;

                //make sure trick is always not the same as correct
                do {
                    trick = (1 + Math.round(19 * Math.random())) *
                        (1+ Math.round (19 * Math.random()))

                }
                while (trick==correct)



                //change box to wrong answers
                document.getElementById("box" + i).innerHTML = trick;
                

            }

        }

    }

    //score text thing
    function scoreText(score){

        if(score <= 9){

            document.getElementById("scoreText").innerHTML = "Really? Not good score!"
        }
        
        if(score >= 9 && score < 16 ){
            document.getElementById("scoreText").innerHTML = "Wowza! Good job!"
        }

        if(score > 16){
            document.getElementById("scoreText").innerHTML = "Did you cheat?"
        }
    }






}