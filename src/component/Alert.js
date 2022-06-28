import React from 'react'

function Alert(props) {
    const captilize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert&&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
   <strong>{captilize(props.alert.type)}</strong>:{props.alert.msg}
    
  </div>
  )
}

export default Alert

//here props.alert&& means if props.alert is false then the further code will not run and if props.alert is true then the further code will run
