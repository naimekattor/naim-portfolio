'use client'

import CursorMagic from 'cursor-magic/react'

const CursorMagicClient = () => {
  return <CursorMagic
    cursorSize={30} // pointer size
    // ↓ customize pointer style
    zIndex={10}
    cursorStyle={{
      backgroundColor: "transparent", // make background transparent
      borderRadius: "50%", // ensure the border is circular
      border: "solid 2px #51e5a8", // border style
    }}
    pointerEvents="none" // ensure cursor is in the middle

    trail={false} // disable trailing effect
    // make the cursor small like a point
    innerStyle={{
      backgroundColor: "#51e5a8", // color of the point
      width: "3px", // width of the point
      height: "3px", // height of the point
      borderRadius: "50%", // make it circular
    }}
  />
}

export default CursorMagicClient;