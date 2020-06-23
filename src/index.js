import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// const imageSources = ["./images/phone.jpg","./images/city.jpg", "./images/email.jpg", "./images/man-in-black-holding-phone-618613.jpg", "./images/people.jpg", "./images/phone.jpg", "./images/team.jpg"];

// imageSources.forEach(srcText => {
//   let image = new Image();
//   image.src = srcText;
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

