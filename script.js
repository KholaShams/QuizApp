//correct answers
const correctAnswers = ['C','C','A','B'];
//Attach an eventListener to the form. 
const form = document.querySelector('.quiz-form');
//Get the result element in the html file 
const result = document.querySelector('.result');
form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    })
    // display the result
    result.classList.remove('d-none');
    //result.querySelector('span').textContent = `${score}%`;
 
    scrollTo(0,0);
    //Animating the score value
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10)
})
//window object-global object(everything we do is stored in this object)


