// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';


function App() {

  function sayHello(messsage: string) {
    console.log(`Hello ${messsage}`)
  }

  sayHello(', World!')


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
