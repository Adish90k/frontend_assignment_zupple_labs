
import Main from "./components/blockinterface/Main";
import Form from "./components/userform/Form"
import "./index.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
 
  return (
    <>
    <Router>
        <Routes>
          <Route path='/' exact element={<Form/>} />
          <Route path='home' element={<Main/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
