import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-4'>
        <Container>
          <h2>myEcommerce site</h2>

         <Route exact path='/' component={HomeScreen}/> 

        </Container>
      
      
      </main>
      <Footer />

    </Router>
  );
}

export default App;
