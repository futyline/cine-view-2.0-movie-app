import React from 'react';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircleRatingDetails({rating}) {
    return (
        <div style={{backgroundColor: '#041226', height: "100px", width: "100px", borderRadius: "50%", padding: "4px"}}>
            <CircularProgressbar
                value={rating}
                maxValue={10}
                text={rating}
                styles={{
                    path: {
                        stroke: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                    },

                    trail: {
                        // Trail color
                        stroke: '#041226',
                      },

                    text: {
                        fill: "white",
                        fontSize: '34px',
                        fontWeight: "700",
                      },
                }}
            />
        </div>
    );
}

export default CircleRatingDetails;