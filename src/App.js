import './App.css';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import News from './pages/news';
import NoticiaComponent from './componenets/NoticiaComponent';
import { BrowserRouter as Router ,Routes , Route, Link } from "react-router-dom"
import PostForm from './pages/PostForm';


function App() {
  return ( 
    <div>
<Home />
   
    <header>

    </header>

<Router>
  <Routes>

    <Route path='/' element={<NoticiaComponent /> } />
    <Route path='/test' element={<PostForm /> } />

  </Routes>
</Router>
</div>
       
  )
}

export default App;
