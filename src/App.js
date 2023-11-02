import {useContext} from 'react';
import bookDemo from './context/bookShow';
const App = () => {
  const num  = useContext(bookDemo);
  return (
    <div>
      <h1>{num}</h1>
    </div>
  )
}

export default App;
   