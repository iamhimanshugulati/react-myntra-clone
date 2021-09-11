import React from 'react'

const Checkbox=(props)=>{
    return (
      <div className="form-check">
            <input className="form-check-input" type="checkbox" value={props.value} id={props.value} name={props.value} onClick={props.onClick}/>
            <label className="form-check-label" htmlFor={props.value}>{props.label}</label>
        </div>
    )
}

export default Checkbox;