import { createElement } from 'react';
import { render } from 'react-dom';
import { Overmind } from 'overmind'

import App from './App';

import { Provider } from 'overmind-react'
import { config } from './overmind/config';
import moment from "moment";
import "rbx/index.css";
const overmind = new Overmind(config)


moment.locale('nb');



render(
  <Provider value={overmind}>
    <App/>
  </Provider>, document.getElementById('root'));