import React from 'react'
import '../css/element.css'

function Element() {
    return (
        <div className='elements'>
            <div className="ele-sct-1">
                <div className='titre'>
                    <h1>Elements</h1>   
                    <p>Lorem ipsum dolor sit amet.</p> 
                </div>
                
                <div className='row mt-4'>
                    <div className='col-6'>
                        <h3 className='text-secondary my-5'>What is a Baseline</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo earum facere dolorum minima nemo numquam vel doloribus ipsum. Recusandae, quaerat nemo. Ex, consequatur beatae repellendus error accusantium praesentium laudantium nulla.</p>
                    </div>
                    <div className='col-3'>
                        <h3 className='text-dark my-5'>Lorem, ipsum.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo earum facere dolorum minima nemo numquam vel doloribus ipsum. Recusandae, quaerat nemo.</p>                            

                    </div>
                    <div className='col-3'>
                        <h3 className='text-dark my-5'>Lorem, ipsum.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo earum facere dolorum minima nemo numquam vel doloribus ipsum. Recusandae, quaerat nemo.</p>  

                    </div>

                </div>

            </div>
            <hr className='my-5'/>
            <div className="ele-sct-2">
                <h3>Sample Content</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci labore harum, doloremque, expedita dolore quam blanditiis alias inventore laboriosam pariatur consectetur, fugit dolorem. Voluptate debitis maxime consequuntur omnis vero doloribus.</p>
                <div className='row'>
                    <div className='col-6' >
                        <h3>lore</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, eligendi dolores fuga molestiae ad incidunt quod alias dolor reiciendis facere quam ab provident doloribus, quibusdam tempora consectetur maxime esse ipsum!</p>
                    </div>
                    <div className='col-6'>
                        <h3>lore</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, eligendi dolores fuga molestiae ad incidunt quod alias dolor reiciendis facere quam ab provident doloribus, quibusdam tempora consectetur maxime esse ipsum!</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4'>
                        <h3>lorem</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum explicabo exercitationem incidunt commodi. Aliquid nesciunt explicabo praesentium ducimus, vitae fugit soluta at totam deserunt illum labore perferendis rem laborum error!
                        </p>
                    </div>
                    <div className='col-4'>
                        <h3>lore</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum explicabo exercitationem incidunt commodi. Aliquid nesciunt explicabo praesentium ducimus, vitae fugit soluta at totam deserunt illum labore perferendis rem laborum error!
                        </p>
                    </div>
                    <div className='col-4'>
                        <h3>lore</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum explicabo exercitationem incidunt commodi. Aliquid nesciunt explicabo praesentium ducimus, vitae fugit soluta at totam deserunt illum labore perferendis rem laborum error!
                        </p>
                    </div>
                </div>
                


            </div>
            <hr className='my-5'/>
            <div className='row ele-sct-3'>
                <div className='col-6 mr-n5'>
                    <h3 className="my-3">Elements</h3>
                    <h4 className="my-3">Text</h4>
                    <p className="mt-3">This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>enphasized</em>. This is <sup>superscript</sup> and this is <sub>subscript</sub> text. This is <u>underligned</u> and this is code : <code> (let i = 0)</code>  .</p> 

                    <hr/>

                    <h2 className="my-4">Heading Level 2</h2>
                    <h3 className="my-4">Heading Level 2</h3>
                    <h4 className="my-4">Heading Level 2</h4>
                    <h5 className="my-4">Heading Level 2</h5>
                    <h6 className="my-4">Heading Level 2</h6>

                    <hr/>


                </div>


                <div className='col-6 pl-5' >
                    <h3>Buttons</h3>
                    <div>
                        <button id='spe'>Special</button>
                        <button id='def'>Default</button>
                        <br/>
                        <button id='big'>Big</button>
                        <button id='def'>Default</button>
                    </div>
                    <h3>Form</h3>
                    <div>
                        <div className='d-flex  '>
                            <input className='mr-4' placeholder='Name' type="text"/>
                            <input  placeholder='Email'  type="email" name="" id=""/>
                        </div>
                        <div>
                            <select className='mt-4' name="sel" id="sel">
                                <option value="">-Select-</option>
                                <option value="">Option 2</option>
                                <option value="">Option 3</option>
                                <option value="">Option 4</option>
                            </select>
                        </div>
                        <div className='d-flex mt-4 align-items-center '>
                            <label htmlFor="">Low</label>
                            <input className='radio' type="radio" name="1" id=""/>
                            <label htmlFor="">Urgent</label>

                            <input className='radio' type="radio" name="1" id=""/>
                            <label htmlFor="">Done</label>

                            <input className='radio' type="radio" name="1" id=""/>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default Element
