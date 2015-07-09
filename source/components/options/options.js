function options() {
  var directive = {
    restrict: 'EA',
    replace: true,
    templateUrl: 'source/components/options/options.html',
    scope: true,
    controller: 'OptionsController',
    controllerAs: 'oc',
    bindToController: {
      options: '=',
      type: '=',
      onSelection: '&?'
    }
  };

  return directive;
}
