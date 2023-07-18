/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';


function AddToCart(props) {

    var contents = props.cartelement
    const [content, setcontent] = useState(contents)
    const [totalMaster, settotalmaster] = useState({ "total_product": 0, "total_price": 0 })


    var totalProduct = 0;
    var totalPrice = 0;
    var tax = 0;
    var shipping = 0;

    useEffect(() => {
        totalProduct = 0;
        totalPrice = 0;
        updateValues();
    }, [content]);

    const remove = async (e) => {
        var elements = content
        elements = elements.filter(elements => elements[0].id !== e)
        setcontent(elements)
        props.cartUpdate(elements.length);
        updateValues();
    }

    const increment = async (e) => {
        var elements = [...content];

        for (var i = 0; i < elements.length; i++) {

            if (elements[i][0].id === e) {
                elements[i].qty = elements[i].qty + 1;
            }

        }
        setcontent(elements)
        updateValues();
    }

    const decrement = async (e) => {
        var elements = [...content];
        for (var i = 0; i < elements.length; i++) {
            if (elements[i][0].id === e) {
                elements[i].qty = elements[i].qty - 1;
            }
        }
        setcontent(elements)
        updateValues();
    }

    const updateValues = () => {

        content.map((value) => {
            var price = value[0].price;
            totalProduct += value.qty;
            totalPrice += price * value.qty;
        });
        settotalmaster({ "total_product": totalProduct, "total_price": totalPrice });
    }



    return (
        <div className='container'>
            {/* <div className='row'>
                <h1>Shopping Cart</h1>
            </div>
            <div className="row">
                <div className="col-lg-7">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <p className="mb-0">You have {content.length} items in your cart</p>
                        </div>
                    </div>
                    {
                        content.map((val) => {
                            return (
                                <div class="card my-4">
                                    <div class="card-body d-flex">
                                        <div className='col-lg-3'>
                                            <img className='cartimg' src={val[0].thumbnail}></img>
                                        </div>
                                        <div className='col-lg-6 text-center'>
                                            <h3 class="card-title">{val[0].title}</h3>
                                            <h5 class="card-text">RS:{val[0].price}</h5>
                                            <button class="btn btn-danger" onClick={() => remove(val[0].id)}>Remove</button>
                                        </div>
                                        <div className='col-lg-3 text-center'>
                                            <h4>Quantity</h4>
                                            <h3>{val.qty}</h3>
                                            <button class="btn btn-primary mx-2 px-4" onClick={() => increment(val[0].id)}>+</button>
                                            <button class="btn btn-primary  mx-2 px-4" disabled={val.qty == 1 && true} onClick={() => decrement(val[0].id)}>-</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
                <div className="col-lg-5">
                    <div className="card  w-25 bg-primary text-white rounded-3 position-fixed">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <p className="mb-2">Total products</p>
                                <p className="mb-2"> {totalMaster.total_product} </p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="mb-2">Sub Total</p>
                                <p className="mb-2">{totalMaster.total_price}</p>
                            </div>
                            <button type="button" className="btn btn-info btn-block btn-lg">
                                <div className="d-flex justify-content-between">
                                    <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}

            <div class="shopping-cart">
                <div className='row'>
                    <h1>Shopping Cart</h1>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <p className="mb-0">You have {content.length} items in your cart</p>
                    </div>
                </div>
                <div className='row '>
                    <div class="column-labels">
                        <label class="product-image col-2">Image</label>
                        <label class="product-details col-3">Product</label>
                        <label class="product-price col-2">Price</label>
                        <label class="product-quantity col-2">Quantity</label>
                        <label class="product-removal col-2">Remove</label>
                        <label class="product-line-price col-1">Total</label>
                    </div>
                </div>

                {
                    content.map((val) => {
                        return (
                            <div className='row '>
                                <div class="product">
                                    <div class="product-image col-2">
                                        <img src={val[0].thumbnail} />
                                    </div>
                                    <div class="product-details col-3">
                                        <div class="product-title">{val[0].title}</div>
                                        <p class="product-description">{val[0].description}</p>
                                    </div>
                                    <div class="product-price col-2">RS:{val[0].price}</div>
                                    <div class="product-quantity col-2">
                                        <h3>{val.qty}</h3>
                                        <div className='d-flex' >
                                            <button class="btn" onClick={() => increment(val[0].id)}><AiFillPlusCircle /></button>
                                            <button class="btn" disabled={val.qty == 1 && true} onClick={() => decrement(val[0].id)}><AiFillMinusCircle /></button>
                                        </div>
                                    </div>
                                    <div class="product-removal col-2">
                                        <button class="remove-product" onClick={() => remove(val[0].id)}>
                                            Remove
                                        </button>
                                    </div>
                                    <div class="product-line-price col-1">{val[0].price * val.qty}</div>
                                </div>
                            </div>
                        )
                    })}

                <div class="totals">
                    <div class="totals-item">
                        <label>Total products</label>
                        <div class="totals-value" id="cart-subtotal">{totalMaster.total_product}</div>
                    </div>
                    <div class="totals-item">
                        <label>Subtotal</label>
                        <div class="totals-value" id="cart-subtotal">{totalMaster.total_price}</div>
                    </div>
                    <div class="totals-item">
                        <label>Tax (5%)</label>
                        <div class="totals-value" id="cart-tax">{(tax = totalMaster.total_price * 0.05).toFixed(2)}</div>
                    </div>
                    <div class="totals-item">
                        <label>Shipping</label>
                        <div class="totals-value" id="cart-shipping">{(shipping = totalMaster.total_product * 0.25).toFixed(2)}</div>
                    </div>
                    <div class="totals-item totals-item-total">
                        <label>Grand Total</label>
                        <div class="totals-value" id="cart-total">{totalMaster.total_price + tax + shipping}</div>
                    </div>
                </div>

                <button class="checkout">Checkout</button>

            </div>
        </div>


    );
}

export default AddToCart;
