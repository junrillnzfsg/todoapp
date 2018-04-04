import 'todomvc-common/base.css';

import angular from 'angular';

import ComponentsModule from './components/components';

import template from './app.html';
import './app.scss';


const AppComponent = { template };

angular.module('app', [ComponentsModule])
  .component('app', AppComponent);
