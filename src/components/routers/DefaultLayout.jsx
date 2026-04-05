/**
 * React
 */
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";

/**
 * Redux
 */
import store from "../../store";

function DefaultLayoutWrapper() {
  return (
    <Outlet />
  );
}

export default function DefaultLayout() {
  return (
    <Provider store={store}>
      <DefaultLayoutWrapper />
    </Provider>
  );
}
