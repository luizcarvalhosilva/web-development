import Header from './components/Header/Header.jsx';
import Banner from './components/Banner/Banner.jsx';
import Container from './components/Container/Container.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Header/>
      <Banner image="home"/>
      <Container>
        <h1>TESTE</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt rem optio delectus? </p>
      </Container>
      <Footer/>
    </>
  )
}

export default App;