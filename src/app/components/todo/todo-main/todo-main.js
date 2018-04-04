import angular from 'angular';

import template from './todo-main.html';
import './todo-main.scss';


const TodoMainComponent = {
  bindings: {
    list: '<',
    complete: '&',
    delete: '&',
    completeAll: '&',
  },
  template,
  controllerAs: 'vm',
};

const TodoMainModule = angular.module('todoMain', [])
  .component('todoMain', TodoMainComponent)
  .name;

export default TodoMainModule;
