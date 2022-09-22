mail.addEventListener('click', () => {
    functionCopy(mail);
})

function functionCopy(elem) {
    navigator.clipboard.writeText(elem.innerHTML)
        .then(() => {
            successMessage.classList.add('active');
            setTimeout(() => successMessage.classList.remove('active'), 2500);
        })
        .catch(err => {
            console.log(err);
        })
}