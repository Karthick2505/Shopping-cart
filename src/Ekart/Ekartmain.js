/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Icon Import ------
import { HiShoppingCart } from 'react-icons/hi';
import { AiFillShopping} from 'react-icons/ai';
import { BsFillPersonPlusFill,BsPersonCheckFill} from 'react-icons/bs';

// File Import ------
import Ekartdisplay from "./component/Ekartdisplay"
import AddToCart from './component/Addtocart';
import "./Ekart.css";
import SignUp from "./component/ContactForm/SignUp";
import ContactForm from './component/ContactForm/Login'
import Addtowhislist from './component/Addtowishlist';
import Userprofile from './component/Userprofile/User-profile';

// material UI ------
import Badge from '@mui/material/Badge';

// Images ----- 
import logomobile from '../ekart images/ekart-website-favicon-white.png';
import logo from '../ekart images/ekart-high-resolution-logo-white-on-transparent-background.png';


function Ekartmain() {
  const [value, setvalue] = useState("")
  const [content, setcontent] = useState([])
  const [categories, setcategories] = useState([])
  const [cartcount, setcartcount] = useState()
  
  const [cartelement, setcartelement] = useState([])
  const [whishlistcount, setwhishlistcount] = useState()
  const [wishlistelement, setwishlistelement] = useState([])
  const [userdata,setuserdata]=useState([])
  
  const [logindetails,setlogindetails] =useState([])
  const [loggedin, setloggedin] = useState(false);


  useEffect(() => {
    getcontent()
    getcategories();
    
  }, []);
  

  const getcontent = async () => {
    const src = await axios.get("https://dummyjson.com/products")
    setcontent(src.data.products)
  };
  const getcategories = async () => {
    const cat = await axios.get("https://dummyjson.com/products/categories/")
    setcategories(cat.data)
  }
  const getserchcontent = async (value) => {
    var urls = "https://dummyjson.com/products/search?q=" + value;
    const search = await axios.get(urls)
    setcontent(search.data.products)
  }
  const changecategorie = async (value) => {
    var urls = "https://dummyjson.com/products/category/" + value;
    const search = await axios.get(urls)
    setcontent(search.data.products)
  }
  const submit = async (e) => {
    e.preventDefault();
    getserchcontent(value)
  }
  const changeinInput = async (e) => {
    setvalue(e.target.value)
  }
  const cartelements = async (CartItems) => {
    setcartelement(CartItems)
  }
  const changecartcount = async (count) => {
    setcartcount(count)
  }
  const wishlistelements = async (whishItems) => {
    setwishlistelement(whishItems)
  }
  const changewhishlistcount = async (count) => {
    setwhishlistcount(count)
  }
  const updateuserdata=(data)=>{
    setuserdata(data)
  }
  const updateloginstatus=(data)=>{
    setloggedin(data)
  }
  const updatelogindetails=(data)=>{
    setlogindetails(data)
  }

  return (
    <Router>
      <div>
        <div class="navbar" >
          <div class="nav-start">
            <a class="logo">
              <Link to={loggedin ? '/products' :'/Shopping-cart'} className="navbar-brand d-flex" >
                <img src={logomobile} height="50" className="float-left logomb" alt="" />
                <img src={logo} height="50" className="float-left logodx" alt="" />              
              </Link>
            </a>
          </div>
          <div class="nav-end">
            <div class="right-container">
              <form class="search" role="search" onSubmit={submit}>
                <input value={value} type="text"  className="searchinput" placeholder="Search" onChange={changeinInput} />
              </form>
              {/* <Link to="/cart"><HiShoppingCart  color='white' size={35} /><span className="badge badge-warning float-right " >{cartcount>0 ? cartcount : ''}</span></Link> */}
              <Link to="/cart"><Badge badgeContent={cartcount}  invisible={cartcount >0 ? '' : false} color="error"><HiShoppingCart  color='white' size={35} /></Badge></Link>
              <Link to="/wishlist"><Badge badgeContent={whishlistcount}   invisible={whishlistcount>0 ? '' : false} color="error"><AiFillShopping color='white' size={35} /></Badge></Link>
              {/* <Link to="/wishlist"><AiFillShopping color='white' size={35} /><span className="badge badge-warning float-right " >{whishlistcount>0 ? whishlistcount : ''}</span></Link> */}
              <Link to={loggedin ? '/user' :'/Shopping-cart'}><button class="btn btn-light profileicon">{ loggedin ? <BsPersonCheckFill size={25} />  : <BsFillPersonPlusFill size={25}/>}</button></Link>
            </div>
          </div>
        </div>
        <Routes >
          <Route exact path='/products' element={<Ekartdisplay Content={content} getserchcontent={getserchcontent} categories={categories} changecategorie={changecategorie} cartelements={cartelements} cartelement={cartelement} changecartcount={changecartcount} wishlistelements={wishlistelements} changewhishlistcount={changewhishlistcount} wishlistelement={wishlistelement}/>}></Route>
          <Route  path='/cart' element={< AddToCart changecartcount={changecartcount} cartelements={cartelements} cartelement={cartelement} />}></Route>
          <Route  path='/wishlist' element={< Addtowhislist changewhishlistcount={changewhishlistcount} wishlistelements={wishlistelements} cartelement={cartelement}  wishlistelement={wishlistelement} changecartcount={changecartcount} cartelements={cartelements}/>}></Route>
          <Route  path='/signup' element={<SignUp userdata={userdata} updateuserdata={updateuserdata}/>}></Route>
          <Route  path='/Shopping-cart' element={<ContactForm updatelogindetails={updatelogindetails}  loggedin={loggedin} updateloginstatus={updateloginstatus} userdata={userdata}/>}></Route>
          <Route  path='/user' element={<Userprofile changecartcount={changecartcount}  cartelements={cartelements} changewhishlistcount={changewhishlistcount}wishlistelements={wishlistelements} updateloginstatus={updateloginstatus} updatelogindetails={updatelogindetails} logindetails={logindetails} cartcount={cartcount} whishlistcount={whishlistcount}/>}></Route>
        
        </Routes>
      </div>

    </Router>

  );
}

export default Ekartmain;