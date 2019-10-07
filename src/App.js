import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./redux/reducers";
import Routes from "./routes";
import thunk from "redux-thunk";

function App() {
  const store = createStore(reducers, {}, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
