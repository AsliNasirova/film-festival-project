import './App.css';
import Audience from './Components/Audience/index';
import Festival from './Components/Festival';
import Flora from './Components/Flora';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Magazine from './Components/Magazine';
import Movies from './Components/Movies';
import Navbar from './Components/Navbar';
import Speakers from './Components/Speakers/index';
import Tickets from './Components/Tickets';

function App() {
  return (
    <div className="App">
      
    <Navbar/>
    <div className='main'>
    <Header/>
    <Flora/>
    <Festival/>
    <Audience/>
    <Movies/>
    <Tickets/>
    <Magazine/>
   <Speakers/>
    <Footer/>
    </div>
    </div>
  );
}

export default App;
