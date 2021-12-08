let btn = document.querySelector('#btn');

function logic() {
    let angle1 = document.querySelector('#angle1Id').value;
    let angle2 = document.querySelector('#angle2Id').value;
    let angle3 = document.querySelector('#angle3Id').value;
    let output = document.querySelector('#output');

    // console.log(angle1);

    if (angle1 === '' || angle2 === '' || angle3 === '') {
        output.innerText = 'Please enter the correct details.';
        return;
    }

    total = parseInt(angle1) + parseInt(angle2) + parseInt(angle3);

    if (total > 180) {
        output.innerText =
            'The sum of the angles entered is greater than 180 degrees. \nHence, it is not a triangle. ❌';
        return;
    } else if (total < 180) {
        output.innerText =
            'The sum of the angles entered is lesser than 180 degrees. \nHence, it is not a triangle.❌';
        return;
    } else {
        output.innerText =
            'The sum of the angles entered is equal to 180 degrees. \nHence, it is a triangle. ✔';
        return;
    }
}

btn.addEventListener('click', logic);
