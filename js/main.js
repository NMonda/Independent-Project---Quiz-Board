$(document).ready(function () {
    const myAnswers = document.querySelectorAll(".ouranswers");
    const finishButton = document.querySelector("#kwisha")
    const scoreMessage = document.querySelector("#finalAnswer");
    let total = 0;
    let score = 0;
    myAnswers.forEach(function (answer) {
        total += parseInt(answer.value);
    })
    finishButton.addEventListener("click", function (e) {
        myAnswers.forEach(function (answer) {
            if (answer.checked) {
                score += parseInt(answer.value);
            }
        })
    })

    let percentageScore = (score / total) * 100;
    let comments = '';
    if (percentageScore > 80) {
        comments += "Kudos! You have scored " + percentageScore + "%";
    }
    else if (percentageScore >= 50 && percentageScore <= 80) {
        comments += "Good! You have scored " + percentageScore + "%";
    }
    else {
        comments += "Oops! You have scored " + percentageScore + "%";
    }
    scoreMessage.innerHTML += comments;

    $("#kwisha").click(function () {
        $("#finalAnswer").removeClass("d-none");
    });
})