import React from 'react'
import Header from './Header';
import ToDoList from './ToDoList'
import Footer from './Footer';

function App() {
  return (
      <main id = "container">
          <Header />
          <ToDoList />
          <Footer />
      </main>
  )
}

export default App;
