import angular from 'angular';

import template from './todo-item.html';
import './todo-item.scss';


const TodoItemComponent = {
  bindings: {
    item: '<',
    complete: '&',
    delete: '&',
    index: '<',
  },
  template,
  controllerAs: 'vm',
};

const TodoItemModule = angular.module('todoItem', [])
  .component('todoItem', TodoItemComponent)
  .name;

export default TodoItemModule;
