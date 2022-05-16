import { store, persistor } from "store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

interface WithChildren {
  children: JSX.Element | JSX.Element[];
}

const ReduxProvider = (props: WithChildren) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {props.children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
