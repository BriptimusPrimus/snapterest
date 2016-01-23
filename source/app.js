var React = require('react');
var ReactDOM = require('react-dom');
var reactElement = React.createElement('h1', { className: 'header' }, 'This is React');
ReactDOM.render(reactElement, document.getElementById('react-application'));