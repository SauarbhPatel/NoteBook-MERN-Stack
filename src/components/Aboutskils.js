import React from 'react'

const Aboutskils = (props) => {
  const {skilName,skilPercent} = props;
  return (
    <>
    <div style={{display:skilName===""?"none":"flex"&&skilPercent===null?"none":"flex" }} className="about-skils-box flex">
        <div className="skils-text">
            {skilName} - <span>{skilPercent}%</span> 
        </div>
        <div className="skils-bar">
            <span style={{width: `${skilPercent}%`}}></span>
        </div>
    </div>
    </>
  )
}

export default Aboutskils