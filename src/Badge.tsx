import React from 'react'

type BadgeProps = {
  label: string,
  image?: string
}

export const Badge = ({ label, image } : BadgeProps) => {
  const style = {
    display: 'inline-flex',
    backgroundColor: 'red'
  }

  return (
    <div style={ style }>
      <img src={ image } />
      <span>{ label }</span>
    </div>
  )
}
