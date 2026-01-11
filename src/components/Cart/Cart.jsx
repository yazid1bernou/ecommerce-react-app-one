import "./Cart.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Cart = () => {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg",
            img2: "https://images.pexels.com/photos/3966212/pexels-photo-3966212.jpeg",
            title: "Item1",
            desc: "",
            isNew: true,
            oldPrice: 19,
            price: 13
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg",
            img2: "",
            title: "Item2",
            desc: "",
            isNew: true,
            oldPrice: 21,
            price: 12
        }
    ]

    return (
        <div className="cart">
            <h1>Products in your cart </h1>
            {data?.map((item) => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price"> 1 x ${item.price} </div>
                    </div>
                    <DeleteOutlineIcon className="delete" />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset"> Reset Cart</span>
        </div>
    )
}

export default Cart;