angular.module('app', ['RecursionHelper', 'checklist-model'])
  .controller('ManagerController', managerController)
  .directive('questionsManager', questionsManager)

  .controller('QuestionController', questionController)
  .directive('question', question)

  .controller('OptionsController', optionsController)
  .directive('options', options)

  .directive('jsonView', jsonView);
