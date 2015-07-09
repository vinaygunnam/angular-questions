function question(RecursionHelper) {
  var directive = {
    restrict: 'EA',
    replace: true,
    templateUrl: 'source/components/question/question.html',
    scope: {},
    bindToController: {
      question: '=',
      ordinal: '=',
      isSubQuestion: '='
    },
    controller: 'QuestionController',
    controllerAs: 'qc',
    compile: function(element) {
      return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn) {
        // Define your normal link function here.
        // Alternative: instead of passing a function,
        // you can also pass an object with
        // a 'pre'- and 'post'-link function.
      });
    }
  };

  return directive;
}

question.$inject = ['RecursionHelper'];
