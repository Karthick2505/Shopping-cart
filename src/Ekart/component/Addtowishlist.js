/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import SweetPagination from "sweetpagination";


function Addtowhislist(props) {

    var contents = props.wishlistelement
    var CartItems = props.cartelement

    const [content, setcontent] = useState(contents)
    const [count, setcount] = useState([]);

    useEffect(() => {

    }, [content]);


    const Addtocart = async (e) => {

        var arr = content.filter(content => content[0].id === e)
        var arr2 = CartItems.filter(content => content[0].id === e)
        arr.qty = 1
        var Cartvar = CartItems
        if(arr2.length === 0){
            Cartvar.push(arr[0])
        }
        
        props.changecartcount(CartItems.length)
        props.cartelements(CartItems)
        remove(e)

    }

    const remove = async (e) => {
        var elements = content
        elements = elements.filter(elements => elements[0].id !== e)
        setcontent(elements)

        props.wishlistelements(elements)
        props.changewhishlistcount(elements.length);

    }

    return (
        <div className='container'>
            <div className="shopping-cart">
                <div className='row'>
                    <h1>WhishList</h1>
                </div>
                {content.length > 0
                    ?
                    <div className="row">

                        {
                            count.map((val) => {
                                return (<>

                                    {/* Single Product */}
                                    <div class=" col-lg-4 col-xl-3 col-sm-4">
                                        <div id="product-2" class="single-product" >
                                            <div class="part-1" >
                                                <img src={val[0].thumbnail}></img>
                                                <span class="discount">{val[0].discountPercentage}%</span>

                                            </div>
                                            <div class="part-2">
                                                <h3 class="product-title">{val[0].title}</h3>
                                                <h4 class="product-price">RS.{val[0].price}</h4>
                                                <h4 class=" product-stock">Stock:{val[0].stock}</h4>
                                                <button className="btn btn-light" onClick={() => Addtocart(val[0].id)}>ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                </>)
                            })}
                        <SweetPagination
                            currentPageData={setcount}
                            dataPerPage={10}
                            getData={content}
                            navigation={true}
                        />
                    </div>
                    :
                    <div className='text-center '>
                        <img src='https://sarienasskin.com/assets/img/empty_wishlist.png' />
                        <h1 >Your wishlist is empty</h1>
                    </div>

                }


            </div>


        </div>


    );
}

export default Addtowhislist;
