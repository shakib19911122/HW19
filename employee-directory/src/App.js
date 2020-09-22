import React from "react";
import Header from "./components/Header";
import List from "./components/List"
import Wrapper from "./components/Wrapper"

function App() {
  return (
    <div className="App">
    <Wrapper>
      <Header />
      <List />
     </Wrapper>
   
    </div>
  );
}

export default App;

