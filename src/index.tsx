import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Hello from './components/Hello';

/**
 * id of App root element
 */
const rootElement = 'root';

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById(rootElement),
);
