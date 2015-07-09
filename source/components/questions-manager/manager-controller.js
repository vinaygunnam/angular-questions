function managerController($http) {
  var self = this;

  // fetch all questions
  var promise = $http({
    url: 'questions.json',
    method: 'GET'
  });

  // handle the response from the promise
  promise.then(function questionsSuccess(response) {
    self.questions = processQuestions(response.data);
  }, function questionsError(response) {
    self.error = response.data || 'Error fetching the questions.';
  });
}

function processQuestions(questions) {
  if (questions && questions.length) {
    return unflatten(questions, 'id', 'parentQuestionId', 'subQuestions')
              .sort(function sort(prev, next) {
                return (prev.ordinal > next.ordinal) ? 1 : -1;
              });
  } else {
    return questions;
  }
}

function unflatten(arr, idProperty, parentIdProperty, childCollectionName) {
  var tree = [],
    mappedArr = {},
    arrElem,
    mappedElem;

  // First map the nodes of the array to an object -> create a hash table.
  for (var i = 0, len = arr.length; i < len; i++) {
    arrElem = arr[i];
    mappedArr[arrElem[idProperty]] = arrElem;
    mappedArr[arrElem[idProperty]][[childCollectionName]] = [];
  }


  for (var id in mappedArr) {
    if (mappedArr.hasOwnProperty(id)) {
      mappedElem = mappedArr[id];
      // If the element is not at the root level, add it to its parent array of children.
      if (mappedElem[parentIdProperty]) {
        mappedArr[mappedElem[parentIdProperty]][childCollectionName].push(mappedElem);
      }
      // If the element is at the root level, add it to first level elements array.
      else {
        tree.push(mappedElem);
      }
    }
  }
  return tree;
}

managerController.$inject = ['$http'];
