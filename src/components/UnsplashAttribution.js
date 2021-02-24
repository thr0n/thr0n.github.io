import React from "react";
import "./unsplashAttribution.css"

export const UnsplashAttribution = (props) => {
    console.log(props)
    return (
        <div className="attribution-line">
            Photo by {props.photographer.name} on <a href="https://unsplash.com/">Unsplash</a>
        </div>
    )
}