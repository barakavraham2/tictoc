import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Square(props) {

    return (
        <>
            <button type="button" className="square" onClick={props.onClick}>{props.value}</button>
        </>
    )
}

export default Square

