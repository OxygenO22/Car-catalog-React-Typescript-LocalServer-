import { Provider } from 'react-redux';
import './App.css';
import { Router } from './components/ui/Router';
import { createStore } from "redux";


const defaultState = {
  cash: 5,
};

const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload };
    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

const store = createStore(cashReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router/>
      </div>
    </Provider>
  );
}

export default App;
