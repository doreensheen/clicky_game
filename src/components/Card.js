import React from "react";
// import IMG_2135 from "./images/IMG_2135.JPG"


const styles = {
    imageStyle: {
        width: "100%",
    }
};

const Card = props => (
        <span onClick={() => props.handleClickedStatus(props.id)}>
            <div className="card">
                <div className="card-body img-container">
                    <img alt={"image " + props.id + " - " + props.clicked} style={styles.imageStyle} src={props.imagePath}/>
                </div>
            </div>
        </span>
);

export default Card;