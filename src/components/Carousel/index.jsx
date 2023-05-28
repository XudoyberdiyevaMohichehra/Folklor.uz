import React from "react";
import  folk from "../../assets/icons/folklor1.jpg";
import { Img } from "./style";

import { Carousel } from 'antd';
const contentStyle = {
    height: '370px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const GenCarousel = () => (
    <Carousel autoplay>
        <div>
            <Img src={folk} alt="" />
        </div>
        <div>
            <h3 style={contentStyle}>2</h3>
        </div>
        <div>
            <h3 style={contentStyle}>3</h3>
        </div>
        <div>
            <h3 style={contentStyle}>4</h3>
        </div>
    </Carousel>
);
export default GenCarousel;