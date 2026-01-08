import "./Categories.scss";
import { Link } from "react-router-dom";
const Categories = () => {
    return (
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg" alt="" />
                    <button>
                        <Link to="/products/1" className="link"> Sale</Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://images.pexels.com/photos/3119215/pexels-photo-3119215.jpeg" alt="" />
                    <button>
                        <Link to="/products/2" className="link"> Woman</Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/974902/pexels-photo-974902.jpeg" alt="" />
                    <button>
                        <Link to="/products/2" className="link"> New Season</Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/3779432/pexels-photo-3779432.jpeg" alt="" />
                            <button>
                                <Link to="/products/2" className="link"> Men</Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/1460838/pexels-photo-1460838.jpeg" alt="" />
                            <button>
                                <Link to="/products/2" className="link"> Accessories</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg" alt="" />
                    <button>
                        <Link to="/products/2" className="link"> Shoes</Link>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Categories;