import { Send } from '@mui/icons-material'
import React from 'react'
import './New.css'

function NewSetller() {
    return (
        <div className='New_cont'>
            <h1 className='New_title'> Newsletter</h1>
            <p className='New_DESC'>Get Timely Update Your Favorite Products</p>
            <div className='input_new_cont'>
                <input className='in' placeholder='Your Mail'/>
                <button className='bu'>
                    <Send/>
                </button>

            </div>
        </div>
    )
}

export default NewSetller
