import HomeGrid from "./HomeComponents/HomeGrid";
import { Container } from 'semantic-ui-react'
import './index.css'

const Home = () => (
  <div id={"home"}>
    <Container fluid>
      <h1>Home</h1>
      <HomeGrid/>
    </Container>
  </div>
);

export default Home;
