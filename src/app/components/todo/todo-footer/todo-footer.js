import angular from 'angular';

import template from './todo-footer.html';
import './todo-footer.scss';


const TodoFooterComponent = {
  bindings: {
    count: '&',
    clear: '&',
    filter: '&',
    category: '<',
  },
  template,
  controllerAs: 'vm',
};

const TodoFooterModule = angular.module('todoFooter', [])
  .component('todoFooter', TodoFooterComponent)
  .name;

export default TodoFooterModule;
