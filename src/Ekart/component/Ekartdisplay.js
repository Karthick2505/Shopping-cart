/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useState } from "react";
import SweetPagination from "sweetpagination";
import { AiOutlineShareAlt,AiOutlineMenu} from "react-icons/ai";
import { RiHeartAddFill } from "react-icons/ri";
import { BiExpand } from "react-icons/bi";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function Ekartdisplay(props) {
  const products = props.Content;
  const categories = props.categories;
  var CartItems = props.cartelement;
  var wishlistitem = props.wishlistelement;
  const [count, setcount] = useState([]);

  const [state, setState] = useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <Box>
      <List>
        <ListItem>
            <ListItemButton onClick={() => props.getserchcontent(' ')} >
              <ListItemText primary={"All"} />
            </ListItemButton>
          </ListItem>
        {categories.map((text) => (
          <ListItem key={text}>
            <ListItemButton onClick={() => props.changecategorie(text)} >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  

  const Addtocart = async (e) => {
    var arr = products.filter((products) => products.id === e);
    var arr2 = CartItems.filter((content) => content[0].id === e);
    arr.qty = 1;
    var Cartvar = CartItems;
    if (arr2.length === 0) {
      Cartvar.push(arr);
    }

    props.changecartcount(CartItems.length);
    props.cartelements(CartItems);
  };

  const Addtowhislist = async (e) => {
    var arr = products.filter((products) => products.id === e);
    var arr2 = wishlistitem.filter((content) => content[0].id === e);
    arr.qty = 1;
    var Cartvar = wishlistitem;
    if (arr2.length === 0) {
      Cartvar.push(arr);
    }

    props.changewhishlistcount(wishlistitem.length);
    props.wishlistelements(wishlistitem);
  };

  return (
    <div className="mt">
      <div className="mobilesearch d-flex">
        <Button onClick={toggleDrawer('left', true)}><AiOutlineMenu/></Button>
        <Drawer open={state['left']} onClose={toggleDrawer('left', false)}>{list()}</Drawer>
      </div>

      <div className="sidebar gt">
        <h1>Catageories</h1>
        <a className="active" onClick={() => props.getserchcontent(' ')}>All</a>
        {categories.map((cat) => {
          return (
            <>
              <a className="active" onClick={() => props.changecategorie(cat)}>{cat}</a>
            </>
          );
        })}
      </div>
      <div className="content">
        {products.length > 0 ? (
          <div className="row">
            {count.map((val) => {
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
                  <div class=" col-lg-4 col-xl-3 col-sm-6">
                    <div id="product-2" class="single-product">
                      <div class="part-1">
                        <img src={val.thumbnail}></img>
                        <span class="discount">{val.discountPercentage}%</span>
                        {/* <span class="new">{val.discountPercentage}%</span> */}
                        <ul>
                          <li>
                            <a>
                              <AiOutlineShareAlt />
                            </a>
                          </li>
                          <li>
                            <a onClick={() => Addtowhislist(val.id)}>
                              <RiHeartAddFill />
                            </a>
                          </li>
                          <li>
                            <a>
                              <BiExpand />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="part-2">
                        <h3 class="product-title">{val.title}</h3>
                        <h4 class="product-price">RS.{val.price}</h4>
                        <h4 class=" product-stock">Stock:{val.stock}</h4>
                        <button
                          className="btn btn-light"
                          onClick={() => Addtocart(val.id)}
                        >
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
            <SweetPagination
              currentPageData={setcount}
              dataPerPage={12}
              getData={products}
              navigation={true}
            />
            
          </div>
        ) : (
          <div class="text-center mt-4">
            <h1>Loading ......</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Ekartdisplay;
