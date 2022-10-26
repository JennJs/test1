import React from 'react';
import ReactDOM from 'react-dom/client';

import { BaseView } from './components/Base/BaseView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BaseView />
  </React.StrictMode>
);