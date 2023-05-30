/* COMEÇO DO STYLED COMPONENTES
function Home() {
  return (
    <div className="App">
      <Styled.Wrapper background="grey">
        <h1>Hello</h1>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
*/

import { Heading } from '../../components/Heading';

function Home() {
  return (
    <div className="App">
      <Heading>Qualquer texto</Heading>
    </div>
  );
}

export default Home;
