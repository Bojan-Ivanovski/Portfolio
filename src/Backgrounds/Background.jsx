import React from "react"

export default function Background(props)
{
    return (
        <div className={props.Background}>
            <canvas data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="100" data-aos-easing="ease-out-back"></canvas>
            <canvas data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="500" data-aos-easing="ease-out-back"></canvas>
            <canvas data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="700" data-aos-easing="ease-out-back"></canvas>
            <canvas data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200" data-aos-easing="ease-out-back"></canvas>
            <canvas data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="400" data-aos-easing="ease-out-back"></canvas>
            <canvas data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200" data-aos-easing="ease-out-back"></canvas>
        </div>
    )
}