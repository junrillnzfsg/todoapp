import angular from 'angular';

import TodoModule from './todo/todo';

const ComponentModule = angular.module('app.components', [TodoModule]).name;

export default ComponentModule;
