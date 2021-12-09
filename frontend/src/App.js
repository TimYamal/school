import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './components/Index';
import Course from './components/Course';
import About from './components/About';
import List from './components/List';
import Teacher from './components/Teacher';

function App() {
  return (
    <div className="App wrapper">
      <Header />
      {/* <Index /> */}
      {/* <Course /> */}
      {/* <About /> */}
      {/* <List /> */}
      <Teacher />
      <Footer />
    </div>
  );
}

export default App;
