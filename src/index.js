import React from 'react';
import './index.css';
import 'babel-polyfill'
import { render } from 'react-dom'
import Root from './containers/Root'
 
render(
  <Root />,
  document.getElementById('root')
)