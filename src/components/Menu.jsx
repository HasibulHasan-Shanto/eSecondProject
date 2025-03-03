import React from 'react'

const Menu = ({children , className}) => {
  return (
    <ul className={`flex gap-10 ${className}`}>{children}</ul>
  )
}

export default Menu