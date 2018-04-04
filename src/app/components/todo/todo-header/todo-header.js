import angular from 'angular';

import template from './todo-header.html';
import './todo-header.scss';


const TodoHeaderComponent = {
  bindings: {
    add: '&',
    name: '=',
  },
  template,
  controllerAs: 'vm',
};

const TodoHeaderModule = angular.module('todoHeader', [])
  .component('todoHeader', TodoHeaderComponent)
  .name;

export default TodoHeaderModule;
