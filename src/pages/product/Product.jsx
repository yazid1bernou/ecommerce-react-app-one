import { useState } from "react"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

import "./Product.scss"

const Product = () => {
    const [selectedImg, setSelectedImg] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const images = [
        "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg",
        "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg"
    ]
    return (
        <div className="product">
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
                    <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span className="price">$230</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maxime cum, quis non fugiat, eligendi iusto soluta beatae
                    assumenda officia excepturi ad tempore
                    deleniti possimus obcaecati veritatis quibusdam, nemo nisi sit?
                </p>
                <div className="quantity">
                    <button onClick={() => setQuantity((prev) => prev === 1 ? 1 : prev - 1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity((prev) => prev === 10 ? 10 : prev + 1)}>+</button>
                </div>
                <button className="add">
                    <AddShoppingCartIcon />  ADD TO CART
                </button>
                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon /> ADD TO WISH LIST
                    </div>
                    <div className="item">
                        <BalanceIcon /> ADD TO COMPARE
                    </div>
                </div>
                <div className="info">
                    <span>Vendor : Polo</span>
                    <span>Product Type : T-Shirt</span>
                    <span>Tag : T-Shirt , Women , Top</span>
                </div>
                <hr />
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    )
}

export default Product;