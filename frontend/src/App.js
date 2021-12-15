import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './components/Index';
import Course from './components/Course';
import About from './components/About';
import List from './components/List';
import Teacher from './components/Teacher';
import Modal from './components/Modal';

function App() {

  const [statePage, setPage] = useState('index');
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [courseId, setCourseId] = useState(null);

  useEffect(() => {
    setPages()
  }, [window.location.hash]);

  useEffect(() => {
    changeTitle()
  }, [statePage]);

  window.addEventListener('hashchange', setPages);

  function setPages () {
    const page = window.location.hash.replace('#', '');
    if (page==='') {
      openPage('index');
    } else if (page.indexOf('?') === -1) {
      openPage(page);
    } else {
      const id = window.location.hash.replace('#course?id=', '')
      setCourseId(id);
      setPage('course');
    }
  }

  function openPage (newPage) {
    setPage(newPage);
  }

  function changeTitle() {
    if (statePage === 'index') {
      document.title = 'Школа тензор'
    } else if (statePage === 'courses') {
      document.title = 'Наши курсы'
    } else if (statePage === 'teachers') {
      document.title = 'Наши преподаватели'
    } else if (statePage === 'about') {
      document.title = 'О нас'
    } else {
      getTitle(courseId);
    }
  }

  async function getTitle (index) {
      const response = await axios.get(`http://127.0.0.1:5000/course/${index}`);
      document.title = response.data.title;
  }

  function newCourseId (id) {
    setCourseId(id);
  }

  function observeModal (newStateModal, courseData) {
    setModal(newStateModal);
    setModalData(courseData);
  }

  function showModal () {
    if (modal) {
      return <Modal showModal={observeModal} courseData={modalData}/>
    }
  }

  return (
    <div className="App wrapper">
      <Header page={statePage}/>

      { (() => {
          if (statePage === 'index') {
            return <Index openModal={observeModal}/>
          } else if (statePage === 'courses') {
            return <List openModal={observeModal} updatePage={openPage} newCourseId={newCourseId}/>
            // return <Course />
          } else if (statePage === 'teachers') {
            return <Teacher />
          } else if (statePage === 'about') {
            return <About />
          } else if (statePage === 'course') {
            return <Course courseId={courseId} openModal={observeModal}/>
          }
        })()
      }

      <Footer />

      {showModal()}
    </div>
  );
}

export default App;
