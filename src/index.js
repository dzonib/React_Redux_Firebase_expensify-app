import React from 'react';
import { render } from 'react-dom';
import route from './routers/router'

const Router = route();

render(Router, document.querySelector('#root'))