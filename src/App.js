import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login} from './actions';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello React, Redux</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={() => dispatch(increment(7))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h3>isLogin: {isLogin ? 'true' : 'false'}</h3>
      <button onClick={() => dispatch(login())}>Login</button>
    </div>
  );
}

export default App;
