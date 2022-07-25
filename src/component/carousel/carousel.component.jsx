const Carousel = () => {

    return (
        <div>
            <div className="slideshow-container">

                <div className="mySlides fade">
                    <div className="numbertext">1 / 3</div>
                    <img src="img1.jpg" style="width:100%"/>
                        <div className="text">Caption Text</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">2 / 3</div>
                    <img src="img2.jpg" style="width:100%"/>
                        <div class="text">Caption Two</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">3 / 3</div>
                    <img src="img3.jpg" style="width:100%"/>
                        <div class="text">Caption Three</div>
                </div>

                <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a className="next" onclick="plusSlides(1)">&#10095;</a>
            </div>
            <br/>

                <div style="text-align:center">
                    <span className="dot" onclick="currentSlide(1)"></span>
                    <span className="dot" onclick="currentSlide(2)"></span>
                    <span className="dot" onclick="currentSlide(3)"></span>
                </div>
        </div>
)
}
export default Carousel;