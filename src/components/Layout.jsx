import React from 'react'
import Form1 from './Form1'

function Layout() {
    return (
        <div className='container vh-100'>
            <div className='row bg-dark text-white h-25 '>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='h2'>Survey</div>
                </div>
            </div>

            <div className='row h-75 bg-light'>
                <div className='d-flex justify-content-center align-items-center'>
                    <Form1 />
                </div>
            </div>
        </div>
    )
}

export default Layout