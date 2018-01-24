import { configure } from '@storybook/vue'

import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins

Vue.use(Vuex);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module)
