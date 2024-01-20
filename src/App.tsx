import styled from "styled-components"
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">test</Heading>
        <Heading as="h2">H2</Heading>
        <Heading as="h3">H3</Heading>
        <Button onClick={() => alert("Check in")}>Check in</Button>
        <Button onClick={() => alert("Check out")}>Check in</Button>

        <Input type="number" placeholder="Number of guests" />
      </StyledApp >
    </>
  )
}

export default App
