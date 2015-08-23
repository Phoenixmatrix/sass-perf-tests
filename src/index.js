import domready from 'domready';
import React from 'react';
import Main from './components/main.jsx';
// import './stylesheets/main.scss';
import './stylesheets/0.scss';
import './stylesheets/1.scss';
import './stylesheets/2.scss';
import './stylesheets/3.scss';
import './stylesheets/4.scss';
import './stylesheets/5.scss';
import './stylesheets/6.scss';
import './stylesheets/7.scss';
import './stylesheets/8.scss';
import './stylesheets/9.scss';

domready(() => {
  React.render(
    <Main />,
    document.body
  );
});
