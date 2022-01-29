import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers";
import initialValues from "./store";

const JobProvider = ({ children }) => {
  const store = createStore(reducers, initialValues);

  return <Provider store={store}>{children}</Provider>;
};

export default JobProvider;
