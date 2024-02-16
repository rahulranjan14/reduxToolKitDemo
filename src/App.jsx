import "./App.css";

//section components imports
import Items from "./components/Items";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";

//redux related imports
import { Provider } from "react-redux";
import store from "./store/store"; //redux store

function App() {
  return (
    <Provider store={store}> {/* wrapping top most component with Provider to make redux store available throughout all the components*/}
      <div
        style={{
          backgroundColor: "grey",
          width: "100%",
          margin: "10px",
          padding: "10px",
        }}
      >
        <h1>Redux-toolkit Implementation</h1>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{ backgroundColor: "grey", margin: "10px", padding: "10px" }}
        >
          <h1>Items Section</h1>
          <Items />
        </div>

        <div
          style={{ backgroundColor: "grey", margin: "10px", padding: "10px" }}
        >
          <h1>Wishlist Section</h1>
          <Wishlist />
        </div>
        <div
          style={{ backgroundColor: "grey", margin: "10px", padding: "10px" }}
        >
          <h1>Cart Section</h1>
          <Cart />
        </div>
      </div>
    </Provider>
  );
}

export default App;
