import React from "react";

const renderImages = (props) => {

    const imageList = props.imageList;
    const handleClick = props.handleClick;
    const imageListIndex = props.listIndex;

    const html = imageListIndex.map(index => 
        <div className="col-sm"  key={index}>
        <img src={imageList[index]} alt="" data={index} className="rounded border border-secondary"  onClick={handleClick}/>
    </div> )


    return (
        <div className="container">
        <div className="row">
        {html}
         </div>
        </div>
    )
}

export default renderImages;