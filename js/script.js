const form = document.querySelector('form');
const nom = document.querySelector('#name');
const email = document.querySelector('#email');
const text = document.querySelector('#text');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const errorName = document.querySelector('#errorName');
    const errorEmail = document.querySelector('#errorEmail');
    const errorText = document.querySelector('#errorText');

    let isValid = true;
    if (nom.value.trim() === "") {
        errorName.textContent = "Veuillez remplir ce champ."
        errorName.style.color = "red";
        isValid = false;
    } else {
        errorName.textContent = "";
    }

    if (email.value.trim() === "") {
        errorEmail.textContent = "Veuillez remplir ce champ."
        errorEmail.style.color = "red";
        isValid = false;
    } else {
        errorEmail.textContent = "";
    }

    if (text.value.trim() === "") {
        errorText.textContent = "Veuillez remplir ce champ."
        errorText.style.color = "red";
        isValid = false;
    } else {
        errorText.textContent = "";
    }

    if (isValid) {
        this.submit();
    }
})

const box = document.querySelectorAll('.box');
for (let i = 0; i < box.length; i++) {
    setTimeout(() => {
        box[i].classList.add("visible");
    }, i * 700);
}