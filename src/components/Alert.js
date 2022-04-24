
// rfce (React funtion based components)
import React from 'react'

function Alert(props) {
    const capitalize =(word)=>{
      if (word==="danger") {
        word="error"
      }
      else if (word==="primary") {
        word="info"
      } 
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
        
    }
    console.log(props.alerT);
    return (
      <>
       { props.alerT &&<div className="alert-section flex">
      <div className={`alert-item border-${props.alerT.type}`}>
          <div className="alert-left flex">
              <div className={`alert-icon flex bg-${props.alerT.type}`}>
                  {/*  Warning */}
                  <i style={{display:props.alerT.type==="warning"?"block":"none"}} className="fa fa-exclamation-triangle"></i> 
                  {/*  danger */}
                  <i style={{display:props.alerT.type==="danger"?"block":"none"}}>✘</i>
                  {/*  success */}
                  <i style={{display:props.alerT.type==="success"?"block":"none"}}>✔</i>
                  {/* primary */}
                  <i style={{display:props.alerT.type==="primary"?"block":"none"}} className="fa fa-info"></i>
              </div>
          </div>
          <div className="alert-center flex">
              <h2>{capitalize(props.alerT.type)}</h2>
              <p>{props.alerT.msg}</p>
          </div>
          <div className="alert-right flex">
              <span style={{display:props.alerT.type==="warning"?"block":"none"}} className="warning">🤥</span> 
              <span style={{display:props.alerT.type==="danger"?"block":"none"}} className="danger">😡</span> 
              <span style={{display:props.alerT.type==="success"?"block":"none"}} className="success">😀</span> 
              <span style={{display:props.alerT.type==="primary"?"block":"none"}} className="primary">🥴</span>
          </div>
      </div>
  </div>}
  </>
    )
}

export default Alert