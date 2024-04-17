import { Link, useNavigate } from "react-router-dom"

function Section2(props){
    const navigate = useNavigate()
    return(
        <div className="section2box" >
        <section class="tf-section tf-about">
        <div class="container">
            <div class="row ">
                <div class="col-md-6 allhidenbox">
                    <div class="img-about pb52 pr70 txt-r tf-animated-fadeup tf-animated-fadeleft ">
                        {props.visible!=="hideclass"&&<img src={"https://blog.fnp.com/wp-content/uploads/2019/04/24AprilSoil.png"} style={{marginTop:'5rem'}} alt="" class=" effect-img-about tfanimated"/>}
                        {props.visible=="hideclass"&&<img src={"https://blog.fnp.com/wp-content/uploads/2019/04/24AprilSoil.png"} alt="" class="effect-img-about tfanimated addimg"/>}
                       
                        
                    </div>
                </div>
                <div class="col-md-6 tf-animated-fadeup">
                    <div class="content-about tfanimated">
                        <div class="title-section style2 mb29 tfanimated">
                            <p class="sub-title">About </p>
                            <h2 class="title">About Our Crop Recommendation and Disease System</h2>
                        </div>
                        <p class="txt-transform">we are dedicated to revolutionizing agriculture through advanced technology and data-driven solutions. Our crop recommendation and disease system harnesses the power of artificial intelligence and agronomic expertise to empower farmers with actionable insights for optimal crop management and disease control.
                        </p>
                        <p class="txt-transform" style={{marginBottom:"4rem"}}>With A Commitment To Excellence, We Leverage The Latest Technologies And Innovative Strategies To Empower Farmers And Revolutionize Agricultural Practices.</p>
                        
                       
                        <div class="wrap" style={{marginTop: props.visible=="hideclass"?"3rem":""}}>
                            {/* <Link onClick={()=>{window.scrollTo(0, 0);}}  to={props.visible=="hideclass"?"/contact":"/about"} class="tf-button">{props.visible=="hideclass"?"Contact Us":"Read More"}</Link> */}
                            <button style={{marginLeft:'-0rem'}}onClick={()=>{window.scrollTo(0, 0);props.visible=="hideclass"?navigate("/contact"):navigate("/about") }}  type="button" class="btn btn-primary">{props.visible=="hideclass"?"Contact Us":"Read More"}</button>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section></div>
    
    )
}

export default Section2


// https://preview.themeforest.net/item/monal-it-service-html-template/full_screen_preview/38059007?_ga=2.148947571.496692815.1700661692-70960350.1697482851
// https://preview.themeforest.net/item/techex-information-technology-joomla-4-template/full_screen_preview/37886474?_ga=2.148409714.496692815.1700661692-70960350.1697482851
// https://preview.themeforest.net/item/globex-it-solutions-multi-services-html5-template/full_screen_preview/27973997?_ga=2.123233998.496692815.1700661692-70960350.1697482851
// https://maahirinfotech.com/index.html