let ct = document.querySelector(".color-and-text").children;
// console.log(ct);

// let textAreaValue = ct[0].value;
// let colorValue = ct[1].children[0].value;
// console.log(colorValue);

let btn = document.querySelector("button");
let rightContainer = document.querySelector(".rightContainer");
//let btn2 = document.querySelectorAll(".btn2");

btn.addEventListener("click", () => {
    if(ct[0].value === ""){
        alert("Add Note");
        return;
    }
    makeStickyNotes(ct[0].value, ct[1].children[0].value);
    ct[0].value = "";
    document.querySelector(".notesNotAdded").style.display = "none";

    removeStickyNotes();
});

function removeStickyNotes(){
    // btn2 = document.querySelectorAll(".btn2");
    // btn2.forEach((singlrBtn) => {
    //     singlrBtn.addEventListener("click", (e) => {
    //         e.target.parentElement.remove();
    //     });
    // });

    let rc = document.querySelectorAll(".rightContainer");

    rc.addEventListener("click", (e) => {
        if(e.target.innerText === 'X'){
            e.target.parentElement.remove();
        }
    });
};

function makeStickyNotes(text, color){
    let div = document.createElement("div");
    div.innerHTML = `<p>${text}</p><button class="btn2">X</button`;
    div.style.backgroundColor = color;
    rightContainer.appendChild(div);

};