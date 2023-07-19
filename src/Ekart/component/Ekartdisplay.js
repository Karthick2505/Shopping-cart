/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useState } from 'react';
import SweetPagination from "sweetpagination";
import { AiOutlineShareAlt } from 'react-icons/ai';
import { RiHeartAddFill } from 'react-icons/ri';
import { BiExpand } from 'react-icons/bi';

function Ekartdisplay(props) {
    const products = props.Content
    const categories = props.categories

    const [cartcount] = useState([])
    const [count, setcount] = useState([])
    const [CartItems] = useState([]);
    const [Wishlistcount] = useState([])
    const [WishlistItems] = useState([]);


    const Addtocart = async (e) => {
        var arr = products.filter(products => products.id === e)
        arr.qty = 1
        var Cartvar = CartItems
        Cartvar.push(arr)
        Cartvar = checkIfDuplicateExists(Cartvar)

        var items = cartcount
        items.push(parseInt(e))
        items = checkIfDuplicateExists(items)

        props.changecartcount(items.length)
        props.cartelements(CartItems)

    }

    const Addtowhislist = async (e) => {

        var arr = products.filter(products => products.id === e)
        arr.qty = 1
        var Cartvar = WishlistItems
        Cartvar.push(arr)

        var items = Wishlistcount
        items.push(parseInt(e))
        items = checkIfDuplicateExists(items)

        props.changewhishlistcount(items.length)
        props.wishlistelements(WishlistItems)

    }

    

    function checkIfDuplicateExists(arr) {
        return arr.filter((item, index) => arr.indexOf(item) === index);
    }
    
    return (
        <div className='mt'>
            <div className="sidebar gt">
                <h1>Catageories</h1>
                <a className="active" onClick={() => props.changecategorie(' ')}>All</a>
                {
                    categories.map((cat) => {
                        return (<><a className="active" onClick={() => props.changecategorie(cat)}>{cat}</a></>)
                    })

                }
            </div>

            <div className='content'>
                {products.length > 0
                    ?
                    <div className="row">

                        {
                            count.map((val) => {
                                return (
                                    <>
                                        {/* 
                                        <div className="col-sm-4">
                                            <div className="card my-3 rounded-bottom">
                                                <img className="card-img-top height" src={val.thumbnail}></img>
                                                <div className="discount">%{val.discountPercentage}</div>
                                                <div className="card-body card-color text-center">
                                                    <h3 className="title">{val.title}</h3>
                                                    <div className="text-price">RS.{val.price}
                                                    {'  '}<span className="text-stocks">stock   <span className="stock-count"><strong>"{val.stock}"</strong></span></span>
                                                    </div><br></br>
                                                    <button className="btn btn-light" disabled={ cartcount.indexOf(val.id) >= 0 }  onClick={ () => Addtocart(val.id)}>ADD TO CART</button>
                                                </div>
                                            </div>
                                        </div> */}
                                        {/* Single Product */}
                                        <div class=" col-lg-4 col-xl-3 ">
                                            <div id="product-2" class="single-product" >
                                                <div class="part-1" >
                                                    <img src={val.thumbnail}></img>
                                                    <span class="discount">{val.discountPercentage}%</span>
                                                    {/* <span class="new">{val.discountPercentage}%</span> */}
                                                    <ul>
                                                        <li><a ><AiOutlineShareAlt /></a></li>
                                                        <li><a onClick={() => Addtowhislist(val.id)}><RiHeartAddFill /></a></li>
                                                        <li><a ><BiExpand /></a></li>
                                                    </ul>
                                                </div>
                                                <div class="part-2">
                                                    <h3 class="product-title">{val.title}</h3>
                                                    <h4 class="product-price">RS.{val.price}</h4>
                                                    <h4 class=" product-stock">Stock:{val.stock}</h4>
                                                    <button className="btn btn-light" disabled={cartcount.indexOf(val.id) >= 0} onClick={() => Addtocart(val.id)}>ADD TO CART</button>
                                                </div>
                                            </div>
                                        </div>
                                    </>)
                            })}
                        <SweetPagination
                            currentPageData={setcount}
                            dataPerPage={10}
                            getData={products}
                            navigation={true}
                        />
                    </div>
                    :
                    <div class="text-center mt-4">
                        
                        <h1>Loading ......</h1>
                    </div>
                }

            </div>

        </div>);
}

export default Ekartdisplay;