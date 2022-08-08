import './styles.css';
import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const[language, setLanguage] = useState('es');
  const[text, setText] = useState('');

  return (
    <div className="App">
      <Field onChange = {setText}>
        <Language language ={language} onLanguageChange={setLanguage}>
          <hr/>
          <Translate text={text} language={language}/>
        </Language>
      </Field>
    </div>
  );
}

export default App;
