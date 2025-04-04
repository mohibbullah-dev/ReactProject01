import "./App.css";
import ContextProvider from "./components/ContextProvider";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ContextProvider>
        <Home />
      </ContextProvider>
    </>
  );
}

export default App;
