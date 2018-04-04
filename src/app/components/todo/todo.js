import angular from 'angular';

import template from './todo.html';
import './todo.scss';

import TodoItemModule from './todo-item/todo-item';
import TodoMainModule from './todo-main/todo-main';
import TodoHeaderModule from './todo-header/todo-header';
import TodoFooterModule from './todo-footer/todo-footer';
import TodoController from './todoCtrl';

const TodoComponent = {
  template,
  controller: TodoController,
  controllerAs: 'vm',
};

const TodoModule = angular.module('todo', [
  TodoItemModule,
  TodoMainModule,
  TodoHeaderModule,
  TodoFooterModule])
  .component('todo', TodoComponent)
  .name;

export default TodoModule;
