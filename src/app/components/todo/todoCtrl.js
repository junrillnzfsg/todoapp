class TodoController {
  constructor() {
    this.todoName = '';
    this.categoryType = 1;
    this.list = [];
    this.cloneList = [];
  }

  updateCloneList() {
    Object.assign(this.cloneList, this.list);
  }

  displayTodoCount() {
    return this.cloneList && this.cloneList.length;
  }

  onAdd(event, value) {
    if (event.keyCode === 13) {
      this.list.unshift({ name: value, isComplete: false });
      this.todoName = '';
      this.updateCloneList();
    }
  }

  onComplete(index) {
    this.list = this.list.map((obj, objectIndex) => {
      obj.isComplete = objectIndex === index || obj.isComplete;
      return obj;
    });
    this.updateCloneList();
  }

  onDelete(index) {
    this.list = this.list.filter((obj, objectIndex) => objectIndex !== index);
    this.updateCloneList();
  }

  onClearCompleted() {
    this.list = this.list.filter(obj => !obj.isComplete);
    this.updateCloneList();
  }

  onCompleteAll() {
    this.list = this.list.map((obj) => {
      obj.isComplete = true;
      return obj;
    });
    this.updateCloneList();
  }

  onFilter(category) {
    this.categoryType = category;
    switch (category) {
      case CATEGORY_TYPE.ALL:
        this.list = this.cloneList;
        break;
      case CATEGORY_TYPE.ACTIVE:
        this.list = this.list.filter(obj => !obj.isComplete);
        break;
      case CATEGORY_TYPE.COMPLETED:
        this.list = this.list.filter(obj => obj.isComplete);
        break;
      default:
        this.list = this.cloneList;
    }
  }
}

export default TodoController;
