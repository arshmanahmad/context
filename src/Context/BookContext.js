import {useState} from 'react';
import {createContext} from 'react' ;

const BookContext = createContext();

function Provider({Children}) {
    const [count, setCount] = useState(5);
    const ValueToUpdate = {
        count,
        valueToIncrement : ()=>{
            setCount(count + 1);
        }
      
    };
    return(
            <BookContext.Provider value={ValueToUpdate}>
               {Children}
            </BookContext.Provider>
    )
}

export default BookContext;
export {Provider};