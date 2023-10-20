// import React, { useState } from "react";
// import "./Style.css";
// import CardsData from "./CardData";
// import { Card, Button } from "react-bootstrap";
// import { useDispatch } from "react-redux"
// import { addToCart } from "../redux/features/CartSlice"
// import toast from "react-hot-toast"

// const Home = () => {
//   const [cartData, setCartData] = useState(CardsData);

//   const dispatch = useDispatch()

//   const send = (e) => {
//     dispatch(addToCart(e)) 
//     toast.success("Items Added In Your Cart")
//   }

//   return (
//     <div>
//       <section className="item_section mt-4 container">
//         <h2 className="px-4" style={{ fontWeight: 400 }}>
//           Restaurants In Indore Open Now
//         </h2>

//         <div className="row mt-2 d-flex justify-content-around align-items-center">
//           {cartData.map((element, index) => {
//             return (
              
//                 <Card
//                   style={{ width: "22rem", border: "none" }}
//                   className="hove mb-4"
//                 >
//                   <Card.Img variant="top" className="cd" src={element.imgdata} />

//                   <div className="card_body">
//                     <div className="upper_data d-flex justify-content-between align-items-center">
//                       <h4 className="mt-2">{element.dish}</h4>
//                       <span>{element.rating}</span>
//                     </div>

//                     <div className="lower_data d-flex justify-content-between">
//                       <h5>{element.address}</h5>
//                       <span>{element.price}</span>
//                     </div>

//                     <div className="extra"></div>

//                     <div className="last_data d-flex justify-content-between align-items-center">
//                       <img src={element.arrimg} className="limg" alt="" />
//                       <Button
//                         style={{
//                           width: "150px",
//                           background: "#ff3054db",
//                           border: "none",
//                         }}
//                         variant="outline-light"
//                         className="mt-2 mb-2"
//                         onClick={() => send(element)}
//                       >
//                         Add To Cart
//                       </Button>
//                       <img src={element.delimg} className="laimg" alt="" />
//                     </div>
//                   </div>
//                 </Card>
              
//             );
//           })}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;








import React, { useState } from 'react'
import "./Style.css"
import { Card, Button } from "react-bootstrap"
import Cardsdata from './CardData'

const Home = () => {

  // eslint-disable-next-line
  const [cartData, setCartData] = useState(Cardsdata)

  return (
    <div>
    <section className="item_section mt-4 container" >
    <h2 className="px-4" style={{fontWeight: 400}} >Restaurants in Indore Open Now</h2>

    <div className="row mt-2 d-flex justify-content-around align-items-center" >
    {
      cartData.map((el) => {
        return (
          <Card style={{width: '22rem', border: 'none'}} className="hove mb-2" >
    <Card.Img variant="top" className="cd" src={el.imgdata} />

    
    <div className="card_body" >

    <div className="upper_data d-flex justify-content-between align-items-center" >
    <h4 className="mt-2" >{el.dish}</h4>
    <span>{el.rating}&nbsp;★</span>
    </div>

    <div className="lower_data d-flex justify-content-between" >
    <h5>{el.address}</h5>
    <span>{el.price}</span>

    </div>

    <div className="extra" ></div>

    <div className="last_data d-flex justify-content-between align-items-center" >
    <img src={el.arrimg} className="limg" alt="" />
    <Button variant="danger outline-light" className="mt-2 mb-2" >Add To Cart</Button>
    <img src={el.delimg} className="laimg" alt="" />
    </div>
    
    </div>

    </Card>
        )
      })
    }
    </div>

    </section>
    </div>
  )
}

export default Home