import "./Footer.scss"

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessoires</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quidem expedita ad laudantium ipsam, ab reiciendis, illo veritatis obcaecati inventore dolores in ducimus ea non facilis beatae nihil provident vitae!</span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quidem expedita ad laudantium ipsam, ab reiciendis, illo veritatis obcaecati inventore dolores in ducimus ea non facilis beatae nihil provident vitae!</span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">YAZIDSTORE</span>
                    <span className="copyright">
                        Copyright 2026. All Rights Reserved
                    </span>
                </div>
                <div className="right">
                    <img src="/images/payment.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer;