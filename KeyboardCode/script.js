function keyboardCode(){


document.addEventListener('keydown', (e)=>{
    console.log(e);
    
    // Update Key Name in DOM
    // const keyName = document.getElementById("keyName");
    const keyName = document.querySelector("div > h1 > span");
    
    keyName.innerText = e.key;
    //console.log(e.key);

    // Update KeyNo
    const keyNumber = document.querySelector("#keyNumber");
    keyNumber.innerText = e.keyCode;
});}

keyboardCode();