import { Block } from "./components";
import style from "./style";

function App() {
  return (
    <Block
      cls="App"
      background="gray"
      color="white"
      textCenter
      size={[style.size.screenHeight, style.size.screenWidth]}
      flex
      flexGap="evenly"
      // flow="column wrap"
    >
      <Block
        size={[style.size.base * 10]}
        border={`${style.color.primary} solid 10px`}
      >
        Hello World
      </Block>
      <Block background={style.color.secondary}>Hello Second World</Block>
      {/* <Block centerAbsolute>CENTERED TEXT</Block> */}
      <Block
        size={[0]}
        border={[
          `${style.color.success} solid ${style.size.base * 12}`,
          `${style.color.warning} solid ${style.size.base * 12}`,
          `${style.color.danger} solid ${style.size.base * 12}`,
        ]}
      ></Block>
      <Block
        flex
        flexGap="around"
        flexCenter
        size={[100, 200]}
        background="white"
      >
        <Block background="black">Item1</Block>
        <Block background="pink">Item 2</Block>
      </Block>
    </Block>
  );
}

export default App;
