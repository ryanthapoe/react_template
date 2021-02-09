import { Block } from "./components";

function App() {
  return (
    <Block
      cls="App"
      bgColor="black"
      tColor="white"
      center
      flex
      flow="row-reverse"
    >
      <Block size={[100]}>Hello World</Block>
      <Block bgColor="brown">Hello Second World</Block>
    </Block>
  );
}

export default App;
