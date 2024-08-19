import { useNavigate } from "react-router-dom"

function Section4(){
    const navigate = useNavigate()
    return(
        <div className="section4box">
            <div className="section4box1">
            <p class="sub-title">Popular Services</p>
            <h1>We provide the Best services</h1>

            </div>
            <div className="section4box2">
              <div onClick={()=>{navigate("/service/crop_recommend") ;window.scrollTo(0, 0); }} className="section4box2Box"><img src="https://media.istockphoto.com/id/168307835/photo/robust-soy-bean-crop-basking-in-the-sunlight.jpg?s=612x612&w=0&k=20&c=lwjWpK46brZBt_VlGe8IwLd1ET9gmWnSHSCMN6QJZQ0=" alt="" /><div><i class="fa-solid fa-comment"></i><p>Crop Recommendation</p></div></div>
              <div onClick={()=>{navigate("/service/crop_fire");window.scrollTo(0, 0);}} className="section4box2Box"><img src="https://www.ecomatcher.com/wp-content/uploads/2023/08/ForestFires.jpg" alt="" /><div><i class="fa-solid fa-comment"></i><p>Crop Fire</p></div></div>
              <div onClick={()=>{navigate("/service/crop_disease");window.scrollTo(0, 0);}} className="section4box2Box"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKSQCyw-KPS1B2IGcTF0AFZV8h8713C_MmbKJkbEFWxbF5Nkig-p8MPsGWKy0gcg2Jpos&usqp=CAU" alt="" /><div><i class="fa-solid fa-comment"></i><p>Crop Disease</p></div></div>
            </div>
          
        </div>
    )
}
export default Section4