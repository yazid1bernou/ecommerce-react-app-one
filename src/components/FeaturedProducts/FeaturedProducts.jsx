import "./FeaturedProducts.scss";
import Card from "../Card/Card";

const FeaturedProducts = ({ type }) => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg",
            img2: "https://images.pexels.com/photos/3966212/pexels-photo-3966212.jpeg",
            title: "Item1",
            isNew: true,
            oldPrice: 19,
            price: 13
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
            img2: "",
            title: "Item2",
            isNew: true,
            oldPrice: 21,
            price: 12
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1381558/pexels-photo-1381558.jpeg",
            img2: "",
            title: "Item3",
            isNew: true,
            oldPrice: 25,
            price: 15
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg",
            img2: "",
            title: "Item4",
            isNew: true,
            oldPrice: 15,
            price: 10
        },

    ]
    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} Products</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis fugiat saepe, repudiandae eos voluptas natus officia!
                    Ut laudantium atque soluta maxime reprehenderit nihil,
                    animi voluptate, assumenda aperiam, dolores labore at.
                </p>
            </div>
            <div className="bottom">
                {data.map((item => (
                    <Card item={item} key={item.id} />
                )))}
            </div>

        </div>
    )
}

export default FeaturedProducts;