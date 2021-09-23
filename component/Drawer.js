import React, { useEffect, useState } from 'react'

const PLACEMENT = {
    LEFT: "left",
    RIGHT: "right"
}

function Drawer(props) {
    
    const { id = "right-drawer", show = false, place = PLACEMENT.RIGHT, noTitle, noCloseButton, onCloseButtonClick = () => {}, title = "", ...rest } = props

    return (
        <div className={`right-drawer-container ${place} ${show ? "on" : "off"} shadow`} id={id} {...rest}>

            {!noTitle && (
                <div className="px-3 py-2 bg-light font-weight-bold">
                    {title}
                </div>
            )}

            <div className="p-3">
                {props.children}
            </div>

            {!noCloseButton && (
                <i className="fas fa-times cursor-pointer position-absolute" style={{ top: '10px', right: '10px' }} onClick={onCloseButtonClick} />
            )}
    
        </div>
    )
}

export { Drawer, PLACEMENT }