
import React from 'react';
import {useContext} from 'react';
import BookContext from './BookContext';

const BookList = () => {
    const {count, valueToIncrement} = useContext(BookContext);
  return (
    <div>
        <h1>
            {count}
        </h1>
        <button onClick={valueToIncrement}/>
    </div>
  )
}

export default BookList;