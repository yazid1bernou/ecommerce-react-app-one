import "./Slider.scss";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { useState } from "react";

const Slider = () => {
    const [currentSlider, setCurrentSlider] = useState(0);

    const data = [
        "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg",
        "https://images.pexels.com/photos/9218635/pexels-photo-9218635.jpeg",
        "https://images.pexels.com/photos/3775120/pexels-photo-3775120.jpeg"

    ]
    const prevSlider = () => {
        setCurrentSlider(currentSlider === 0 ? 2 : (prev) => prev - 1)
    }
    const nextSlider = () => {
        setCurrentSlider(currentSlider === 2 ? 0 : (prev) => prev + 1)
    }
    return (
        <div className="slider">
            <div className="container" style={{ transform: `translateX(-${currentSlider * 100}vw)` }}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlider}>
                    <WestIcon />
                </div>
                <div className="icon" onClick={nextSlider}>
                    <EastIcon />
                </div>
            </div>

        </div>
    )
}

export default Slider;