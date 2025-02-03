let maximum = parseInt(prompt("enter the maximum number!"));
while(!maximum){
    maximum=parseInt(prompt("enter the valid number!"));
}

const tragetNUM = Math.floor(Math.random()*maximum)+1;



let guess = prompt("enter your first guess (type 'q' to quit)");
let attempts = 1;

while(parseInt(guess) !== tragetNUM){
   if(guess === 'q')break;
   guess = parseInt(guess);
   if(guess > tragetNUM){
      guess= prompt("too high ! enter the guess");
      attempts++;
}  else if(guess<tragetNUM) {
      guess= prompt("too low! enter the guess");
      attempts++;
}  else {
   guess= prompt("invalid guess.please enter the number or 'q' to quit ");
  }
}


if(guess === 'q'){
   console.log("ok ,you quit")
}else{
   console.log("congrulation you win")
   console.log("you got it !")
}


