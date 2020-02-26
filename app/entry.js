import Vue from "vue";
import React from "react";
import { render } from "react-dom";

import VueApp from "./app.vue";
import ReactApp from './app.jsx';
import './styles';

console.log("Hello world!");

// Vue app option
Vue.config.productionTip = false;
new Vue({ render: h => h(VueApp) }).$mount("#vueApp");

// React app option
render(<ReactApp />, document.querySelector('#reactApp'));
