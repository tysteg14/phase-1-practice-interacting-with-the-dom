
const currentNumElement = document.getElementById("counter");
const decrementButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const heartButton = document.getElementById("heart");
const likesList = document.querySelector(".likes");
const pauseButton = document.getElementById("pause");
const submitButton = document.getElementById("submit");
let form = document.querySelector("form")

let currentCount = 0;
let updateCounterInterval;

function updateCounter() {
    currentCount ++;
    currentNumElement.textContent = currentCount
};


function manualDecrement() {
    currentCount --;
    currentNumElement.textContent = currentCount;
};

decrementButton.addEventListener("click", manualDecrement);

function manualIncrement() {
    currentCount ++;
    currentNumElement.textContent = currentCount;
};

plusButton.addEventListener ("click", manualIncrement);

function heartLog() {
    let listItem = likesList.querySelector(`#item-${currentCount}`)

    if (listItem === null) {
        let newListItem = document.createElement("li")
        newListItem.id = `item-${currentCount}`
        newListItem.innerHTML = `${currentCount} has been liked <span>1</span> time`
        likesList.appendChild(newListItem)
    } else {
        let likeSpan = listItem.querySelector("span");
        let likeCount = parseInt(likeSpan.textContent);
        likeCount ++;
        likeSpan.textContent = likeCount;
        listItem.innerHTML = `${currentCount} has been liked <span>${likeCount}</span> times`;
    }
}

heartButton.addEventListener("click", heartLog);

function pauseCount() {
    if (pauseButton.innerText === "pause") {
        clearInterval(updateCounterInterval);
        pauseButton.innerText = "resume";
    } else {
        updateCounterInterval = setInterval(updateCounter, 1000);
        pauseButton.innerText = "pause";
    }
    [decrementButton, plusButton, heartButton].forEach(button => button.disabled = !button.disabled);
}


pauseButton.addEventListener("click", pauseCount);

updateCounterInterval = setInterval(updateCounter, 1000);

function submitForm(e) {
    e.preventDefault();
    handleSubmit(e.target["comment-input"].value);
    form.reset();
}

form.addEventListener("submit", submitForm);

function handleSubmit (list) {
    let p = document.createElement("p");
    let btn = document.createElement("button")
    btn.textContent =  " x"
    btn.addEventListener("click", handleDelete);
    p.textContent = `${list}  `  
    p.appendChild(btn);
    document.querySelector("#list").appendChild(p);
} 

function handleDelete(e) {
    e.target.parentNode.remove();
}










