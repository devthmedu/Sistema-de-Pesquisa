import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from '../components/About'; // Verifique se está exportando corretamente
import Details from '../components/Details'; // Verifique se está exportando corretamente
import Info from '../components/Info'; // Verifique se está exportando corretamente
import Questions from '../components/Questions'; // Verifique se está exportando corretamente
import ThankYou from '../components/ThankYou'; // Verifique se está exportando corretamente

import '../style/styles.css';

function App() {
  const initBasicData = JSON.parse(localStorage.getItem('data')) || {};
  const initQuestionsData = JSON.parse(localStorage.getItem('questiondata')) || {};

  const [basicData, setBasicData] = useState(initBasicData);
  const [questionData, setQuestionData] = useState(initQuestionsData);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(basicData));
  }, [basicData]);

  useEffect(() => {
    localStorage.setItem('questiondata', JSON.stringify(questionData));
  }, [questionData]);

  const addBasicData = (name, email, contact) => {
    const myBasicData = { name, email, contact };
    setBasicData(myBasicData);
  };

  const addQuestionData = (profession, interest, reference) => {
    const myQuestionData = { profession, interest, reference };
    setQuestionData(myQuestionData);
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Info addBasicData={addBasicData} />} />
        <Route path='/questions' element={<Questions addQuestionData={addQuestionData} />} />
        <Route path='/details' element={<Details data={basicData} questionData={questionData} />} />
        <Route path='/thanks' element={<ThankYou />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
