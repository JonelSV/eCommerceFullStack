import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main className='py-4'>
        <Container>


      <h2>myEcommerce site</h2>

        </Container>
      </main>
      <Footer />



    </div>
  );
}

export default App;
