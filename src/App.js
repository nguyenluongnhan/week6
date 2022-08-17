import {Route, Routes}  from 'react-router-dom';
import Search from './Search';
import QuizApp from './QuizApp';
import Register from './Register';
import Home from './Home';
import {Link} from 'react-router-dom'

function App() {
  return (
    <div>
      <button style={{ position: "fixed", top: "0", left: "0", width: "75px" }}>
        <Link to={"/"}>HOME</Link>
      </button>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/search' element={<Search />} />
        <Route path='/register' element={<Register />} />
        <Route path='/quizapp' element={<QuizApp />} />
      </Routes>
    </div>
  );
}

export default App;
