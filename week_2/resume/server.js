//typewriter effect 
const Name = document.getElementsByTagName("h1")[0];
const text_name = document.getElementsByTagName("h1")[0].textContent;

function text_typing_effect(element , text, i = 0) {
    if (i === 0){
        element.textContent = "";
    }

    element.textContent += text[i];

    //if reached end of string
    if (i === text.length -1){
        return;
    }

    setTimeout(() => text_typing_effect(element, text, i+1), 50);
}

text_typing_effect(Name, text_name);

//appear from side effect 

const slide_ele = document.getElementsByClassName('slide')[0]; 
const slide_ele1 = document.getElementsByClassName('slide')[1]; 
const slide_ele2 = document.getElementsByClassName('slide')[2]; 

setTimeout(() => {
    if (slide_ele) {
        slide_ele.classList.add("active");
    }
    if (slide_ele1) {
        slide_ele1.classList.add("active");
    }
    if (slide_ele2) {
        slide_ele2.classList.add("active");
    }
}, 100);

//appear from top effect 

const slide_ele3 = document.getElementsByClassName('top_slide')[0]; 
const slide_ele4 = document.getElementsByClassName('top_slide')[1]; 

setTimeout(() => {
    if (slide_ele3) {
        slide_ele3.classList.add("active");
    }
    if (slide_ele4) {
        slide_ele4.classList.add("active");
    }
}, 700);



