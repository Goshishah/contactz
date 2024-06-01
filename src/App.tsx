import { Provider } from "react-redux";
import Contacts from "./Contacts";
import { store } from "./store/store";

function App() {
  return (
    <div className="p-4">
      <Provider store={store}>
        <Contacts />
      </Provider>
    </div>
  );
}

export default App;
