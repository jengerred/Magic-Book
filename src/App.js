import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cover from './Cover';
import Book from './Book';
import Title from './Title';
import End from './End';


import './App.css';





function App() {
  return (
    <div className="App">

      <Router>
      <Routes>
        <Route index element={<Cover/>}/> 
        <Route path='/book' element={<Book/>}/>
        <Route path='/title' element={<Title/>}/>
        <Route path='/end' element={<End/>}/>
      </Routes>
      </Router>  

   </div>
   )

};

export default App;
