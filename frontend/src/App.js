import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './components/Index';
import Course from './components/Course';
import About from './components/About';
import List from './components/List';
import Teacher from './components/Teacher';

function App() {

  const [statePage, setPage] = useState('index');

  function openPage (newPage) {
    setPage(newPage);
  }

  return (
    <div className="App wrapper">
      <Header 
      updatePage={openPage}/>

      { (() => {
          if (statePage === 'index') {
            return <Index />
          } else if (statePage === 'courses') {
            return <Course />
          } else if (statePage === 'teachers') {
            return <Teacher />
          } else if (statePage === 'about') {
            return <About />
          }
        })()
      }

      <Footer />
    </div>
  );
}

export default App;
