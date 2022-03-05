import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerImg from '../../static/Banner.svg';

const item = [
   BannerImg,
   BannerImg,
   BannerImg,
]

function Banner(props) {
    const { width } = props;
    return (
      <div style={{ position: "relative",
      width: "100%",
      height: "100%"}}>
        <div style={{ padding: "3% 0%" }}>
          <Carousel
            showThumbs={false}  
            width={'100%'}
          >
            {item.map((i) => {
              return (
                <div>
                  <img src={i} height="450px" />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    );
}

export default Banner;