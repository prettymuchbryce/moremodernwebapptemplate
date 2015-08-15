import React from 'react';
import ComponentMain from './components/main';
import MainStyle from '../less/main.less';

var mainComponent = React.createElement(ComponentMain);
React.render(mainComponent, document.getElementById('react-container'));