import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';

function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <AppHeader isYellow>
        <AppLogo src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </AppHeader>
      <Button>Normal Button</Button>
      <TomatoButton>Tomato Button</TomatoButton>
      <Button as="a" href="/">Link with Button styles</Button>
      <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>

      <Input placeholder="A bigger text input" size="2em" />
      <br />
      {/* Notice we can still use the size attr from Input */}
      <PasswordInput placeholder="A bigger password input" size="2em" />
    </AppWrapper>
  );
}

const Input = styled.input.attrs(props => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: 2px solid palevioletred;
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

// Input's attrs will be applied first, and then this attrs obj
const PasswordInput = styled(Input).attrs({
  type: "password",
})`
  // similarly, border will override Input's border
  border: 2px solid aqua;
`;


// podwojna klasa - wieksza moc!
const Thing = styled.div`
  && {
    color: blue;
  }
`
// style globalne ustawiac na gorze componentu
const GlobalStyle = createGlobalStyle`
  div${Thing} {
    color: red;
  }

  a {
    text-decoration: none;
  }
`

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
  animation: ${AppLogoSpin} infinite 20s linear;
`;

const AppWrapper = styled.div`
  color: #aaa;
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: ${({isYellow}) => isYellow ? 'yellow': '#333333'};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
  font-size: 2em;
`;

const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />

export default App;
