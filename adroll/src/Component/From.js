import React from 'react'
import './FormStyle.css'

const From = () => {
  return (
    <div>
        <div className="form-container">
            <form action="">
                <div className="img">
                    <img src="https://asset.brandfetch.io/idhmbrRB-o/idRV1D5U3Q.svg?updated=1667995733943" alt="" width="125" height="75" />
                </div>

                <div>
                    <div>
                    <label htmlFor="" className="label1">Email Address</label><br/>
                    <input type="text" />
                    </div>
                    
                    <div>
                    <label htmlFor="" className="label2">Password</label><br/>
                    <input type="password" />
                    </div>
                    
                    <div>
                    <button className="start-btn btn2-color">Sign In</button>
                    </div>
                    
                    <div className="forgot">
                        <a href="">Forgot your passWord?</a>
                    </div>

                    <hr/>
                    <div>
                    <p>Don't have an account? <a href="">Sign up</a></p>

                    <a href="">Terms Of Service</a>
                    <a href="">Privacy Notice</a>
                    <a href=""><i class="fa-solid fa-play btnC"></i>Adjust Ad Preferences</a>

                    <p className="copy">Copyright © 2023 NextRoll, Inc. All rights reserved.</p>
                    </div>
                    
                </div>
            </form>
        </div>
    </div>
  )
}

export default From