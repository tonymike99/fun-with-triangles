let btn = document.querySelector('#btn');

function logic() {
    let base = document.querySelector('#baseId').value;
    let height = document.querySelector('#heightId').value;
    let output = document.querySelector('#output');

    console.log(base);

    if (base === '' || height === '') {
        output.innerText = 'Please enter the correct details.';
        return;
    } else if (base === '0' || height === '0') {
        output.innerText =
            'A triangle cannot have base or height as 0. \nPlease enter the correct details.';
        return;
    } else {
        base = parseInt(base);
        height = parseInt(height);
        let result = 0.5 * base * height;
        output.innerText = `The area of the triangle is ${result} square cm.  ✔`;
        return;
    }
}

btn.addEventListener('click', logic);
