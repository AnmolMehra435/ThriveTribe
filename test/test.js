// let submit = document.querySelector(".sub")
// let box1 = document.querySelector(".category1")
// let box2 = document.querySelector(".category2")
// let box3 = document.querySelector(".category3")
// let finalScore = document.querySelector(".final-score")


document.querySelector('.sub').addEventListener('click', function () {
    let score = 0;

    for (let i = 1; i <= 10; i++) {
        const options = document.getElementsByName(`option${i}`);
        let answered = false;

        for (let j = 0; j < options.length; j++) {
            if (options[j].checked) {
                score += j; // j=0 -> 0 points, j=1 -> 1 point, etc.
                answered = true;
                break;
            }
        }

        if (!answered) {
            alert(`Please answer Question ${i}`);
            return; 
        }
    }

    const results = document.querySelectorAll('.result');
    results.forEach(result => result.style.display = 'none');

    document.querySelector('.sub').style.display = "none";
    document.querySelector('.final-score').style.display = 'block';

    document.querySelector('.final-score').textContent = `Your Score is ${score}`;

    if (score >= 0 && score <= 10) {
        document.querySelector('.category1').style.display = 'block';
    } else if (score > 10 && score <= 20) {
        document.querySelector('.category2').style.display = 'block';
    } else if (score > 20 && score <= 30) {
        document.querySelector('.category3').style.display = 'block';
    }
});



