import React from 'react'

type HeadingProps = {
  text: string
}

function Heading({ text }: HeadingProps) {
  return (
    <h1 className="heading-1">{text}</h1>
  )
}

export default Heading
