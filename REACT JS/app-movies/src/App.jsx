import Header from './components/Header/Header.jsx';
import Banner from './components/Banner/Banner.jsx';
import Container from './components/Container/Container.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <Container>
        <h1>TESTE</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, voluptates! Veniam officia reiciendis quae harum voluptates praesentium ut sed reprehenderit, culpa quam earum dolor dignissimos eaque laudantium tenetur, possimus sapiente.</p>
      </Container>
      <Footer/>
    </>
  )
}

export default App;