const counterElement = document.getElementById('counter');
let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");
let counterValue = 0;

function updateCounter() {
    counterElement.textContent = counterValue;
}

increaseBtn.addEventListener("click", function increase(){
    counterValue++;
    updateCounter();
    playAnimation('increase');
});

decreaseBtn.addEventListener("click", function decrease(){
    counterValue--;
    updateCounter();
    playAnimation('decrease');
});

resetBtn.addEventListener("click", function reset(){
    counterValue = 0;
    updateCounter();
    playAnimation('reset');
});

function playAnimation(action) {
    const colors = {
        increase: '#28a745',
        decrease: '#dc3545',
        reset: '#007bff',
    };

    counterElement.style.color = colors[action];

    // Reset the color after the animation duration (500ms)
    setTimeout(() => {
        counterElement.style.color = '#333';
    }, 500);
}