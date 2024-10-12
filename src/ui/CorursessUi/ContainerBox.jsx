import React from 'react'
import BoxContent from './BoxContent'
import ButtonsUI from './ButtonsUI'

function ContainerBox() {
  return (
    <>
    <div className="border-2 border-gray-500 relative    ">
    <BoxContent/>
    <ButtonsUI/>
    </div>
    </>
  )
}

export default ContainerBox
