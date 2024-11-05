'use client'

import CursorMagic from 'cursor-magic/react'

const CursorMagicClient = () => {
  return <CursorMagic
    cursorSize={50} // pointer size
    // ↓ customize pointer style
    zIndex={10}
    cursorStyle={{
      backgroundColor: "#55e6a5", // background color
      border: "solid 2px #000000", // adding border style
    }}
  />
}

export default CursorMagicClient;