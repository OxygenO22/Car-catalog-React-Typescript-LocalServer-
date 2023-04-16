import { Provider } from 'react-redux';
import './App.css';
import { Router } from './components/ui/Router';
import { store } from "./store/store";


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
