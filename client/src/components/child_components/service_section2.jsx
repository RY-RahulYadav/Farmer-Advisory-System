import { useNavigate } from "react-router-dom"

function Ssection2(props){
    const navigate= useNavigate()
    return(
        <div className="Ssection2box">
            <h2>Why choose us!</h2>
            <div className="lines"></div>
            <div className="Ssection2box1">
                <div className="Ssection2boxsame"><h3>Reliable Support</h3> <p>Our dedicated support team is here to assist you every step of the way. Whether you have questions, need assistance, or want to explore new features, we're just a message away.</p></div>
                <div className="Ssection2boxsame uniquebox"><h3>Cost-Effective Solutions</h3><p>Budget-friendly messaging solutions that deliver excellent value, ensuring effective communication without breaking the bank</p></div>
                <div className="Ssection2boxsame"><h3>Instant Delivery</h3><p>Experience the power of real-time communication. With our services, your messages reach your audience instantly, ensuring timely and impactful communication.</p></div>
                
            </div>
             <div className="Ssection3box">
                 <p>Ready to get started or have questions? Reach out to our team . <div > We're here to assist you in leveraging the power of {props.text} for your business !</div></p>
                 <button onClick={()=>{navigate("/contact");window.scrollTo(0, 0);}}>Contact Us</button>
             </div>
        </div>
    )
}
export default Ssection2