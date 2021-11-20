import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { useState } from 'react';


// simple Component to render basics text and user info
function TitleComp(){
    let [user,setuser]=useState("Default User")
    const welcometext="Complete your KYC"
    return(
        <div className="col-md-6 col-xl-6">
        <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col" style={{color: "rgb(255,255,255)"}}>
                        <div className="row">
                            <div className="col">
                                <br /><br />
                                <h4 className="small font-weight-bold">Hi {user},</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                 <br /><br />
                                <h4 className="small font-weight-bold" style={{"fontSize": "30px"}}><strong>
                                {welcometext}    
                                </strong><br /></h4>
                                <h4 className="small font-weight-bold" style={{"fontSize": "15px"}}>
                                and experience the world class bitcoin app defi    
                                <br /><br /><br /></h4>

                                <h4 className="small font-weight-bold" style={{"fontSize": "15px"}}><strong>
                                Start KYC ->    
                                </strong><br /></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default TitleComp;