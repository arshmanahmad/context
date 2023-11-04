import React from 'react'
import BookList from './BookList';
import BookContext from './Context/BookContext';
 
const App = () => {
  return (
    <div>
      <BookList/>
      <BookContext/>
    </div>
  )
}

export default App