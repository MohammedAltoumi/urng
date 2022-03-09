let form = document.querySelector('form');
let input = document.querySelector('input');
form.addEventListener('submit', () => {

    let num = input.value
    let arr = []

    for (let i = 0; i < num; i++) {

        let signed = Math.floor(Math.random() * 2);
            if (signed) {
            arr.push(Math.floor(-Math.random() * num + 1))
        } else {
            arr.push(Math.floor(Math.random() * num + 1))
        }
    }
    console.log(arr);
})