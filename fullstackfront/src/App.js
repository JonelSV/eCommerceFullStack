import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div>
      <Header />
      <main className='py-4'>
        <Container>
          <h2>myEcommerce site</h2>

          <HomeScreen />

        </Container>
      
      
      </main>
      <Footer />



    </div>
  );
}

export default App;
