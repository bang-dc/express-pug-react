import './toto.css'
import React from 'react';
import ReactDOM from 'react-dom';
import LikeButton from '../common/LikeButton';

ReactDOM.render(
  <React.StrictMode>
    <LikeButton />
  </React.StrictMode>,
  document.getElementById('like')
);