// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

// import React from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'

// const Hello = props => (
//   <div>Hello {props.name}!</div>
// )

// Hello.defaultProps = {
//   name: 'David'
// }

// Hello.propTypes = {
//   name: PropTypes.string
// }

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <Hello name="React" />,
//     document.body.appendChild(document.createElement('div')),
//   )
// })

import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from '../components/App';
import rootReducer from '../reducers';
// import '../assets/scss/style.scss';
// uncomment this line if you cant see styles in dev.
import defaultProps from '../data/defaultProps';

const store = createStore(rootReducer, defaultProps, applyMiddleware(thunk));

const wrappedApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(wrappedApp, document.body.appendChild(document.createElement('div')));
});
