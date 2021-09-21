import React from "react";
import { Provider } from "react-redux";

import store from "./store";

///đasadasdasd
const a = 1;
import TodoList from "./TodoList";

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

// thinh 781 them

export default App;
