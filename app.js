const button = document.querySelector('button');
const inputs = document.querySelectorAll('input');


button.addEventListener('click', () => {

    inputs.forEach(input => {

        input.classList.remove('show-error-icon');
        input.nextElementSibling.classList.remove('show-error-msg');
        input.style.color = 'black'


        input.addEventListener('invalid', () => {

            if (!input.value) {
                input.classList.add('show-error-icon');
                input.nextElementSibling.innerHTML = `${input.name} cannot be empty`;
                input.nextElementSibling.classList.add('show-error-msg')
            } else {
                input.style.color = 'hsl(0, 100%, 74%)'
                input.classList.add('show-error-icon');
                input.nextElementSibling.innerHTML = `Looks like this is not a ${input.name}`;
                input.nextElementSibling.classList.add('show-error-msg')
            }
        })
    });
})