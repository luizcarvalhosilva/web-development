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
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt rem optio delectus? A quam dolorem perferendis cumque natus enim, maiores maxime iste velit veniam ullam nulla vero iusto soluta dolor!</p>
      </Container>
      <Footer/>
    </>
  )
}

export default App;