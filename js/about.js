
const toggleElement = () => {
    const element = document.getElementById("hi");
    if (element !== null) {
        if (element.innerText === "") {
            element.innerText = "To succeed you must believe. When you believe, you will succeed. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion! Lion!";
        } else {
            element.innerText = '';
        }
    }
}

toggleElement();

// document.getElementById("nothing").addEventListener('click', () => toggleElement('nothing'));



const toggleElementDream = () => {
    const element = document.getElementById("dream");
    if (element !== null) {
        if (element.innerText === "") {
            element.innerText = element.innerText ? '' : "To succeed you must believe. When you believe, you will succeed. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion! Lion!";
        }
        else {
            element.innerText = '';
        }
    }
}
toggleElementDream();



const toggleElementNothing = () => {
    const element = document.getElementById("nothing");
    if (element.innerText !== null) {
        if (element.innerText === '') {
            element.innerText = "To succeed you must believe. When you believe, you will succeed. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion! Lion!";
        }
        else
        {
            element.innerText = '';
        }
    }
}

toggleElementNothing();





const toggleElementFear = () => {
    const element = document.getElementById("fear");
    if (element.innerText !== null) {
        if (element.innerText === '') {
            element.innerText = "To succeed you must believe. When you believe, you will succeed. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion! Lion!";
        }
        else
        {
            element.innerText = '';
        }
    }
}

toggleElementFear();




