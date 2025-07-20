import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter'; 

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Faiza" age={22} bio="React learner and full-stack explorer!" />
      <Counter /> 
      <Footer />
    </div>
  );
}

export default App;
