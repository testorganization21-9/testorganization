import React from "react";
import { Provider } from "react-redux";

import store from "./store";

///đasadasdasd
const a = 1;
const b  = 2;
const c = 4;
const d = 1
import TodoList from "./TodoList";

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

// thinh 781 them
// commit1 

// commit 2
// commit nhanh 1
// commit nhanh 2
export default App;
