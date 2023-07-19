/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { HiShoppingCart } from 'react-icons/hi';
import { AiOutlineUser ,AiFillShopping} from 'react-icons/ai';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Ekartdisplay from "./component/Ekartdisplay"
import AddToCart from './component/Addtocart';
import "./Ekart.css";
import SignUp from "./component/ContactForm/SignUp";
import ContactForm from './component/ContactForm/Login'
import Addtowhislist from './component/Addtowishlist';


function Ekartmain() {
  const [value, setvalue] = useState("")
  const [content, setcontent] = useState([])
  const [categories, setcategories] = useState([])
  const [cartcount, setcartcount] = useState()
  
  const [cartelement, setcartelement] = useState([])
  const [whishlistcount, setwhishlistcount] = useState()
  const [wishlistelement, setwishlistelement] = useState([])


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
  const changecartcount = async (count) => {
    setcartcount(count)
  }
  const changewhishlistcount = async (count) => {
    setwhishlistcount(count)
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
  const wishlistelements = async (whishItems) => {
    setwishlistelement(whishItems)
  }



  return (
    <Router>
      <div>
        <div class="navbar" >
          <div class="nav-start">
            <a class="logo" href="/">
              <Link to="/" className="navbar-brand d-flex" >
                <img src="https://img.freepik.com/premium-vector/online-shopping-logo-design-template-digital-shopping-logo-mouse-cursor-cart-concepts_502185-286.jpg" height="50" className="float-left" alt="" />
                <h2>SHOPPING</h2>
              </Link>
            </a>
        
          </div>
          <div class="nav-end">
            <div class="right-container">
              <form class="search" role="search" onSubmit={submit}>
                <input value={value} type="text" placeholder="Search" onChange={changeinInput} />
              </form>
              <Link to="/cart"><HiShoppingCart color='white' size={35} /><span className="badge badge-warning float-right " color='black'>{cartcount>0 ? cartcount : ''}</span></Link>
              <Link to="/wishlist"><AiFillShopping color='white' size={35} /><span className="badge badge-warning float-right " color='black'>{whishlistcount>0 ? whishlistcount : ''}</span></Link>
              <a href="#profile" className='profile'>
                <AiOutlineUser color='white' size={35} />
              </a>
              <Link to="/signup"><button class="btn btn-light">Signup</button></Link>
            </div>
          </div>
        </div>
        <Routes >
          <Route exact path='/' element={<Ekartdisplay Content={content} categories={categories} changecategorie={changecategorie} cartelements={cartelements} changecartcount={changecartcount} wishlistelements={wishlistelements} changewhishlistcount={changewhishlistcount}/>}></Route>
          <Route exact path='/cart' element={< AddToCart changecartcount={changecartcount} cartelements={cartelements} cartelement={cartelement} />}></Route>
          <Route exact path='/wishlist' element={< Addtowhislist changewhishlistcount={changewhishlistcount} wishlistelements={wishlistelements} cartelement={cartelement}  wishlistelement={wishlistelement} changecartcount={changecartcount} cartelements={cartelements}/>}></Route>
          <Route exact path='/signup' element={<SignUp/>}></Route>
          <Route exact path='/login' element={<ContactForm/>}></Route>
        
        </Routes>
      </div>

    </Router>

  );
}

export default Ekartmain;