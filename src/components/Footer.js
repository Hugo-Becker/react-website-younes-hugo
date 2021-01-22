import React from 'react'
import '../css/footer.css'

function Footer() {
    return (
        <div className='footer'>
            <h1>Get in touch</h1>
            <div className='row'>
                <div className=" half half-left">
                    <label htmlFor="">Name</label>
                    <input type="text"/>
                </div>
                <div className=" half half-right">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id=""/>
                </div>
                
            </div>



            
        </div>
    )
}

export default Footer
