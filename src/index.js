import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import { useSelector, useDispatch, connect } 
from 'react-redux';
import { increment, decrement, reset, login, logOut } 
from './actions';

const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = ({ counter }) => {
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div class="col-md-12">
      <div style={{ border: "5px solid blue"}}>
      <h2 >Counter {counter}</h2>
      <label>increment by 5 :  </label>
      <button class="btn btn-primary" onClick={()=>dispatch(increment(5))}>sum (5) +</button><p/> <br/>
      <label>reset by 1  :  </label>
      <button class="btn btn-primary" onClick={()=>dispatch(decrement())}>rest by 1</button><p/> <br/>
      <label>reset :  </label>
      <button class="btn btn-primary" onClick={()=>dispatch(reset())}>reset</button><p/>
      </div>
      <hr/>

      <div style={{ border: "5px solid yellow"}}>
      Are u logged :
      <b> {isLogged ? 'Yeah!, you are logged ' : 'no, you are not! '}</b> <p/> <br/>
      <button  class="btn btn-primary" onClick={()=>dispatch(login())}>login</button> <p/> <br/>
      <button class="btn btn-primary" onClick={()=>dispatch(logOut())}>log out</button> <p/> <br/>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  counter : state.counter
})

// connects react component and react store 
const ConnectApp = connect(mapStateToProps)(App);

render(
  <Provider store={myStore}>
    <ConnectApp />
  </Provider>,
  document.getElementById('root')
);
