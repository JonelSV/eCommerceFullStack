import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Weather from './weather/Weather';


const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-4'>
        <Container>
          <Route exact path='/' component={HomeScreen}/> 
          <Route path='/Product/:id' component={ProductScreen}/> 
          <Route path='/Weather' component={Weather} />
        </Container>
      
      
      </main>
      <Footer />

    </Router>
  );
}

export default App;
