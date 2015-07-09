function questionsManager() {
  var directive = {
    restrict: 'EA',
    replace: true,
    templateUrl: 'source/components/questions-manager/manager.html',
    controller: 'ManagerController',
    controllerAs: 'mgr'
  };

  return directive;
}
