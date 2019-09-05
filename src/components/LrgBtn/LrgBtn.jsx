import React from 'react'
import { NavLink } from 'react-router-dom';

export default function LrgButton(props) {

  return (
    <div className="lrg-btn">
      <NavLink to="/about">{props.btnName}</NavLink>
    </div>
  )
}
