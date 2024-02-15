function toggleAnswer(element) {
    var answer = element.querySelector('.answer');
    answer.classList.toggle('show-answer');
    element.classList.toggle('open');
}