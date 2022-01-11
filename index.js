function welcomer(){
  console.log("welcome to piano");
}

welcomer();

//step 1: connect keyboard to buttons
//on screen

//step 2: make changes to button based on event.

function pianoPress(){
    let Key = document.getElementById("c key");

    Key.addEventListener("keydown", (event) => {
         console.log(`${event.key}`);
    });
  console.log(Key);

}
pianoPress();
