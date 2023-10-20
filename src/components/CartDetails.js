import React, { useState, useEffect } from "react";
import "./CartStyle.css";
import { useSelector, useDispatch } from "react-redux"
import { addToCart, removeToCart, removeSingleItems, emptyCartItems } from "../redux/features/CartSlice";
import toast from "react-hot-toast"


const CartDetails = () => {
  const { carts } = useSelector((state) => state.allCart);

  const dispatch = useDispatch()

  const [totalPrice, setTotalPrice] = useState(0)

  const [totalQuantity, setTotalQuantity] = useState(0)

  const handleIncrement = (e) => {
    dispatch(addToCart(e))
  }

  const handleDecrement = (e) => {
    dispatch(removeToCart(e))
    toast.success("Item Remove From Your Cart")
  }

  const handleSingleDecrement = (e) => {
    dispatch(removeSingleItems(e))
  }

  const emptyCart = () => {
    dispatch(emptyCartItems())
    toast.success("Your Cart is Empty")
  }

  const total = () => {
    let totalPrice = 0;
    carts.map((el, index) => {
      return totalPrice = el.qnty * el.price + totalPrice
    })
    setTotalPrice(totalPrice)
  }

  useEffect(() => {
    total()
  }, [total])

  const total_quantity = () => {
    let totalQuantity = 0;
    carts.map((el, index) => {
      return totalQuantity = el.qnty + totalQuantity
    })
    setTotalQuantity(totalQuantity)
  }

  useEffect(() => {
    total_quantity()
  }, [total_quantity])
  
  return (
    <div className="row justify-content-center m-0">
      <div className="col-md-8 mt-5 mb-b cardsdetails">
        <div className="card">
          <div className="card-header bg-dark p-3">
            <div className="card-header-flex">
              <h5 className="text-white m-0">Cart Calculation{carts.length > 0 ? `(${carts.length})` : ""}</h5>
              {carts.length > 0 ? (
                <button className="btn btn-danger mt-0 btn-sm" onClick={emptyCart} >
                  <i className="far fa-trash-alt mr-2"></i> Empty-Cart
                </button>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="card-body p-0">
            {carts.length === 0 ? (
              <table className="table cart-table mb-0">
                <tbody>
                  <tr>
                    <td colSpan={6}>
                      <div className="cart-empty">
                        <i className="fa fa-shopping-cart"></i>
                        <p>Your Cart is Empty</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <table className="table cart-table table-responsive-sm">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th className="text-right">
                      <span className="amount" id="amount">
                        Total Amount
                      </span>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {carts.map((data, index) => {
                    return (
                      <tr>
                        <td>
                          <button onClick={() => handleDecrement(data.id)} className="prdct-delete">
                            <i className="far fa-trash-alt mr-2"></i>
                          </button>
                        </td>
                        <td>
                          <div className="product-img">
                            <img src={data.imgdata} alt="" />
                          </div>
                        </td>
                        <td>
                          <div className="product-name">
                            <p>{data.dish}</p>
                          </div>
                        </td>
                        <td>{data.price}</td>
                        <td>
                          <div className="prdct-qty-container">
                            <button className="prdct-qty-btn" onClick={data.qnty <= 1 ? () => handleDecrement(data.id) : () => handleSingleDecrement(data)} type="button">
                              <i className="fa fa-minus"></i>
                            </button>
                            <input
                              className="qty-input-box"
                              value={data.qnty}
                              disabled
                              type="text"
                            />
                            <button className="prdct-qty-btn" onClick={() => handleIncrement(data)} type="button">
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </td>
                        <td className="text-right">{data.qnty * data.price}</td>
                      </tr>
                    );
                  })}
                </tbody>

                <tfoot>
                  <tr>
                    <th>&nbsp;</th>
                    <th colSpan={3} >&nbsp;</th>
                    <th>Items in Cart<span className="ml-2 mr-2" >:</span><span className="text-danger" >{totalQuantity}</span></th>
                    <th className="text-right" >Total Price<span className="ml-2 mr-2" >:</span><span className="text-danger" >{totalPrice}</span></th>
                  </tr>
                </tfoot>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
