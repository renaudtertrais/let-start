import { createElement } from 'react';
import { render } from 'react-dom';

import App from './components/App';
import './style/index.scss';

render(createElement(App), document.getElementById('app'));
