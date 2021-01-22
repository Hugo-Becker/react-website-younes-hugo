import React from 'react'
import '../css/footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>

                <h3>Get in touch</h3>

                <div className='row'>
                    <div className=" half half-left">
                        <label htmlFor="">Name</label>
                        <input placeholder='Name' type="text"/>
                    </div>
                    
                    <div className=" half half-right">
                        <label  htmlFor="">Email</label>
                        <input placeholder='Email'  type="email" name="email" id=""/>
                    </div>
                    <div className='message'>
                        <label htmlFor="">Message</label>
                        <textarea placeholder='Message' name="" id="" cols="30" rows="10"></textarea>

                    </div>
                    <button>SEND MESSAGE</button>

                
                </div>
                <p>All right reserved to ...</p>




                

                
                

            </div>
            
            
        </div>
    )
}

export default Footer
