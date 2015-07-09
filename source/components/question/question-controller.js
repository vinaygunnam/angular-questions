function questionController() {

}

questionController.prototype.answerChanged = function (choice) {
  this.question.answer = choice;
};
