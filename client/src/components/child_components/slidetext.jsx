import { useNavigate } from "react-router-dom"

function SlideText(props){
    const naviagte = useNavigate()
    return(

        <div>
             <div className="slidePara">
                    <p className="para1">{props.para1} </p>
                    <p className="para2">{props.para2}</p>
                    <button onClick={()=>{naviagte('/about')}} type="button" class="btn btn-primary">Learn More</button>
                    <button onClick={()=>{naviagte('/service/crop_recommend')}}type="button" class="btn btn-outline-light">Service We Provided </button>
                </div>
        </div>
    )
}
export default SlideText