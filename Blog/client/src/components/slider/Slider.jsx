import './slider.css'

export default function Slider() {
    return (
        <div className="slider">
            <div className="slider-titles">
                <span className="slider-title slider-title--sm">My First React</span>
                <span className="slider-title slider-title--lg">Blog</span>
            </div>
            <img 
                className="slider-img" 
                src="https://media.cntraveler.com/photos/60596b398f4452dac88c59f8/3:2/w_3999,h_2666,c_limit/MtFuji-GettyImages-959111140.jpg" 
                alt="Img" 
            />
        </div>
    )
}
