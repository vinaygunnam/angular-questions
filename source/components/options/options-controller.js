function optionsController() {
  this.type = this.type || 'text';
  this.selection = this.initialSelection;
}

optionsController.prototype.onSelectionChanged = function () {
  if (this.onSelection && typeof this.onSelection === 'function') {
    this.onSelection({
      choice: this.selection
    });
  }
};
