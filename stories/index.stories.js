/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import 'buefy/lib/buefy.css';

import MyButton from './MyButton';
import Welcome from './Welcome';
import Navbar from '../src/components/navbar.vue';

storiesOf('Welcome').add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Button')
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') },
  }))
  .add('with JSX', () => ({
    components: { MyButton },
    render() {
      return <my-button onClick={this.action}>With JSX</my-button>;
    },
    methods: { action: linkTo('clicked') },
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') },
  }));

storiesOf('Navbar')
  .add('Basic', () => ({
    components: { Navbar },
    template: `<navbar></navbar>`,
  }))
  .add('With Color', () => ({
    components: { Navbar },
    template: `<navbar :color="'light'"></navbar>`,
  }));

/* eslint-enable react/react-in-jsx-scope */
