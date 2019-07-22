import React from 'react'
import './SearchBox.css'

export const SearchBox = props =>
{
    const {handleChange, placeHolder} = props

    return (
        <input 
            className={`search`}
            type={`search`}
            placeholder={placeHolder}
            onChange={handleChange} 
        />
    )

}