
import "./Home.scss";
import Slider from "../../components/slider/Slider";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

const Home = () => {
    return (
        <div className="home">
            <Slider />
            <FeaturedProducts type={"Featured"} />
            <FeaturedProducts type={"Trending"} />
        </div>
    )
}

export default Home;