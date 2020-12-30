import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './component/app/App';
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.render(
  <Router basename="/test_task3">
    <App />
  </Router>,
  document.getElementById('root')
);


