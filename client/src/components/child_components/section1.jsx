import { useEffect } from "react"
import SlideText from "./slidetext";

function  Section1(){
useEffect(()=>{
    var myIndex = 0;
    carousel();
    
    function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}    
      x[myIndex-1].style.display = "block";  
      setTimeout(carousel, 1500); // Change image every 2 seconds
    }
},[])

    return(
        <div className="fadediv"  style={{zIndex:"-1000"}}>
        <div className="w3-content w3-section" style={{zIndex:"-10"}} >
            <div className="mySlides" style={{background:  "linear-gradient(48deg, rgba(16,16,34,0.7492647058823529) 40%, rgba(239,239,250,0.17699579831932777) 97%) ,url(https://scx2.b-cdn.net/gfx/news/hires/2022/leaf.jpg) no-repeat center center/cover" }} >
              <SlideText para1={"Grow Your Crop . Detect Fire "} para2="About Our Crop Recommendation and Disease System"/></div>
            <div className="mySlides" style={{background:  "linear-gradient(48deg, rgba(16,16,34,0.7492647058823529) 40%, rgba(239,239,250,0.17699579831932777) 97%) ,url(https://cdn.shopify.com/s/files/1/2337/4427/t/4/assets/description_image_AdobeStock_64459396-2.jpg?8913540661554531241) no-repeat center center/cover" }}>

                <SlideText para1={"Grow Your Crop . Detect Fire"} para2="About Our Crop Recommendation and Disease System"/>
                
                </div>
            <div className="mySlides" style={{background:  "linear-gradient(48deg, rgba(16,16,34,0.8492647058823529) 40%, rgba(239,239,250,0.17699579831932777) 97%) ,url(https://img.staticmb.com/mbcontent/images/uploads/2023/11/Curry-Leaves-Plant-Vastu.jpg) no-repeat center center/cover" }}>
                  <SlideText para1={"Grow Your Crop . Detect Fire"} para2="About Our Crop Recommendation and Disease System"/></div>
        
      </div>
      </div>
    )
}

export default Section1