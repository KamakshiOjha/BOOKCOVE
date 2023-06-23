import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter as Router, Route, BrowserRouter, Routes} from 'react-router-dom';
import Comunity from './components/Comunity';
import Join from './components/Join';
import Profile from './components/Profile';
import Home from './components/Home';
import Card from './components/Card';
import Category from './components/Category';
import Bestseler from './components/Bestseler';
import Account from './components/Account';
import JoinClubPage from './components/Joinclub';
import Childern_literature from './components/category_pages/Childern_literature';
import Footer from './components/Footer';
import ReviewBlock from './components/Review';
import CartPage from './components/Cart';
import Biography from './components/category_pages/Biography';





function App() {
  return (
    <BrowserRouter >
  
    <Navbar  title="BOOKCOVE" />

     {/* <Alert alert="Enter valid symbols" /> */}
    <Routes>
    <Route path='/bestseler' element={<Bestseler/>}/>
    <Route path='/category' element={<Category/>}/>
    <Route path='/account' element={<Account/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/cart' element={<CartPage/>}/>
    <Route path='/review' element={<ReviewBlock/>}/>
    <Route path='/joinclub' element={<JoinClubPage/>}/>
    {/* <Route path='/cart' element={<CartProvider/>}/> */}
    <Route path='/about' element={<About title= "About us"/>}/>
    <Route path='/' element={<Home />}/>

    <Route path='/comunity' element={<Comunity title = "MEMBERS"/>}/>
    <Route path='/join' element={<Join title = "CONTACT US" />}/>
    <Route path='/profile' element={<Profile title = "MAGIC WORDS" />}/>
    <Route path='/children_literature' element={<Childern_literature/>}/>
    <Route path='/biography' element={<Biography/>}/>

    
    </Routes>
    <Footer/>
    
    
    </BrowserRouter>
     
 
  );
}

export default App;

{/* <Router>
<Navbar title="Magic words" />
  <Alert alert="Enter valid symbols" />
  <div className="container my-3">
      <Route path="/about">
        <About title= "About us"/>
      </Route>
      <Route path="/">
        <TextForm heading="Enter the Text"/>
      </Route>
  </div>
</Router> */}