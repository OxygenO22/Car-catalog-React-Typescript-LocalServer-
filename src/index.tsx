import "./index.css";
import "./firebase";
import App from "./App";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { store } from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
