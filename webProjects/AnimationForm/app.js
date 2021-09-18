function animatedForm() {
    const arrows = document.querySelectorAll(".fa-arrow-down");

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;
            const invalidInput = document.getElementById('msg')
                //check for validation
                if(input.type === "text" && validateUser(input)){
                    nextSlide(parent, nextForm);
                    invalidInput.classList.add('innactive')
                    invalidInput.classList.remove('active')
                }else if(input.type === "email" && validateEmail(input)){
                    nextSlide(parent, nextForm);
                    invalidInput.classList.add('innactive')
                    invalidInput.classList.remove('active')
                }else if(input.type === "password" && validateUser(input)){
                    nextSlide(parent, nextForm);
                    invalidInput.classList.add('innactive')
                    invalidInput.classList.remove('active')
                }else{ 
                    input.placeholder = "Input Here";
                    invalidInput.classList.remove('innactive')
                    invalidInput.classList.add('active')
                    parent.style.animation = "shake 0.5s ease"
                }

                parent.addEventListener('animationend', () => {
                    parent.style.animation = "";

                })
        });
        
    });
}



function nextSlide(parent, nextForm){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

function validateUser(user){
    if(user.value.length <6){
        console.log('not enough characters');
        error('rgb(189,87,87)')
    }else{
        error('rgb(87,189, 130)')
        return true;
    }
}

function validateEmail(email){
    const validation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(validation.test(email.value)){
        error('rgb(87,189, 130)')
        return true;
    }else{
        error('rgb(189,87,87)')
    }
}

function error(color){
    document.body.style.backgroundColor = color;
}

animatedForm();