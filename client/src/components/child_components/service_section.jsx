function ServiceSection1(props) {
    return (
        <div className="SsectionBox">

            <div className="SsectionBox1">
                <div>
                    <p class="sub-title" >{props.stitle}</p>
                    <h2> {props.title}</h2>
                    <p className="diffpara">{props.para}</p>
                    <p>This Device Helps you to Automated Your Business TeleCalling Process with Below Awesome Benefits,.</p>
                    {props.page!=="lead"&&<div>
                        <div className="pointline"><img src={props.simg} alt="error" /><p>Instant Delivery</p></div>
                        <div className="pointline"><img src={ props.simg} alt="error" /><p>Seamless Integration</p></div>
                        <div className="pointline"><img src={ props.simg} alt="erro" /><p>Customization Options</p></div>
                        <div className="plimg"><img src={ props.img} alt="error" /></div>
                    </div>}
                   { props.page=="lead"&&<div>
                         <ul  >
                            <li ><i class="fa-solid fa-arrow-right"></i>Pay Once + 1 Year Warranty.</li>
                            <li><i class="fa-solid fa-arrow-right"></i>Bulk Voice Calling</li>
                            <li><i class="fa-solid fa-arrow-right"></i>Auto Dailer</li>
                            <li><i class="fa-solid fa-arrow-right"></i>IVR Routing</li>
                            <li><i class="fa-solid fa-arrow-right"></i>Daily 800 to 1000 Calls</li>
                            <li><i class="fa-solid fa-arrow-right"></i>Initiates calls using its own number</li>

                            </ul> 
                    </div>}
                </div>
                {props.page=="lead"&&<img  className ="leadimg" src={ props.img} alt="" />}
                {props.page!=="lead"&&<img className ="notleadimg"src={ props.img} alt="" />}
            </div>
        </div>
    )
}
export default ServiceSection1