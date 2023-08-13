import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';

//actions -> increment, decrement
const increment = () => {
  return {
    type: "INCREMENT",
  };
};
const decrement = () => {
  return {
    type: "DECREMENT",
  }; 
};
//reducer -> アクションと前の状態を受け取って新しい状態を返す
const counterReducer = (state = 0, action) => {
  switch(action.type){
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state -1;
  }
};
//store
let store = createStore(counterReducer);

//コンソールに新しい状態を出力する
store.subscribe(() => console.log(store.getState()));
//dispatch
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


