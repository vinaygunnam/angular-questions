function jsonView() {
  var directive = {
    restrict: 'EA',
    replace: true,
    template: '<div class="question"></div>',
    scope: {
      target: '='
    },
    link: function link(scope, element) {
      scope.$watch('target', function (value) {
        if (value) {
          element.JSONView(value, { collapsed: true });
        }
      }, true);
    }
  };

  return directive;
}
