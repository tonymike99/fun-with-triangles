let btn = document.querySelector('#btn');

function logic() {
    let base = document.querySelector('#baseId').value;
    let perpendicular = document.querySelector('#perpendicularId').value;
    let output = document.querySelector('#output');

    console.log(base);

    if (base === '' || perpendicular === '') {
        output.innerText = 'Please enter the correct details.';
        return;
    } else if (base === '0' || perpendicular === '0') {
        output.innerText =
            'A triangle cannot have base or perpendicular as 0. \nPlease enter the correct details.';
        return;
    } else {
        base = parseInt(base);
        perpendicular = parseInt(perpendicular);
        let result = Math.sqrt(base * base + perpendicular * perpendicular);
        output.innerText = `The length of the hypotenuse is ${result} cm.  ✔`;
        return;
    }
}

btn.addEventListener('click', logic);
