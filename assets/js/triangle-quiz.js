const btn = document.querySelector('#btn');

const logic = () => {
    const quiz = document.getElementsByClassName('quiz');
    // console.log(quiz.length);

    const correctAnswers = ['90°', 'Right angled', 'One right angle'];

    let score = 0;
    let j = 0;

    for (let i = 0; i < quiz.length; i++) {
        if (quiz[i].checked) {
            // console.log(quiz[i].innerText);
            // quiz[i].innerHTML += `✔`;
            // console.log(quiz[i].value);
            if (quiz[i].value == correctAnswers[j]) {
                score++;
                j++;
                // console.log(quiz[i]);
                // console.log(quiz[i].checked);
                // console.log(quiz[i].value);
                //  == quiz[i].value
            }
        }
    }

    output.innerText = `Your score is ${score} ✔`;
};

btn.addEventListener('click', logic);
