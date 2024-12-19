let input = document.querySelector('input'),
    btn = document.querySelector('button');

btn.addEventListener('click', () => {
    function slide() {
        if (
            input.value === null || input.value === ''
        ) {
            alert('Enter the number! ')
        }
        const number = Number(input.value);
        alert(eval(input.value))
    }
    slide()
})