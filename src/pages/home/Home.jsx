
import "./Home.scss";
import Slider from "../../components/slider/Slider";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Categories from "../../components/Categories/Categories";

const Home = () => {
    return (
        <div className="home">
            <Slider />
            <FeaturedProducts type={"Featured"} />
            <Categories />
            <FeaturedProducts type={"Trending"} />
        </div>
    )
}

export default Home;