import React from "react";
import IMG_2135 from "./images/IMG_2135.JPG"

const styles = {
    imageStyle: {
        width: "100%",
    }
};

const Card = () => (
    <div className="container card-columns">
        <div className="card">
            <div className="card-body">
                <img alt="image" style={styles.imageStyle} src={IMG_2135}/>
            </div>
        </div>
        <div className="card">
            <div className="card-body">
                <img alt="image" style={styles.imageStyle} src={IMG_2135}/>
            </div>
        </div>
        <div className="card">
            <div className="card-body">
                <img alt="image" style={styles.imageStyle} src={IMG_2135}/>
            </div>
        </div>
        <div className="card">
            <div className="card-body">
                <img alt="image" style={styles.imageStyle} src={IMG_2135}/>
            </div>
        </div>
        <div className="card">
            <div className="card-body">
                <img alt="image" style={styles.imageStyle} src={IMG_2135}/>
            </div>
        </div>
        <div className="card">
            <div className="card-body">
                <img alt="image" style={styles.imageStyle} src={IMG_2135}/>
            </div>
        </div>
    </div>
);

export default Card;