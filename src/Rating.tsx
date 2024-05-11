import React from "react";

function Star(props: any) {
    console.log("star rendered")
    if(props.selected) {
        return <div><b>Star</b></div>
    } else {
        return <div>Star</div>
    }
}

export function Rating(props: any) {
    console.log("rating rendered");
    let stars = [];
    let no = 0;
    if (props.value > 0) {
        for (let i = 0; i < props.value; i++) {
            stars[i] = <Star selected={true}/>
            no++;
        }
        for (let i = no; i < 5; i++) {
            stars[i] = <Star selected={false}/>
        }
    }
    return <div>{stars}</div>
}

export default Rating;