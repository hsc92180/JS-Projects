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
    btn2 = document.querySelectorAll(".btn2");
    btn2.forEach((singlrBtn) => {
        singlrBtn.addEventListener("click", (e) => {
            e.target.parentElement.remove();
        });
    });

    // let rc = document.querySelectorAll(".rightContainer");

    // rc.addEventListener("click", (e) => {
    //     if(e.target.innerText === 'X'){
    //         e.target.parentElement.remove();
    //     }
    // });
};

function makeStickyNotes(text, color){
    let div = document.createElement("div");
    div.innerHTML = `<p style="width: 98%; color: white; font-weight: medium;">${text}</p><button class="btn2" style=" background-color: red; color: white;">X</button`;
    div.style.backgroundColor = color;
    div.style.margin = '20px';
    div.style.padding = '5px';
    // div.style.width = '90%';
    div.style.borderRadius = '5px'
    div.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.5)'
    div.style.display = 'flex'
    rightContainer.appendChild(div);

};