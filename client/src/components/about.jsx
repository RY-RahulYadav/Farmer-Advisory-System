import Footer from "./child_components/footer"
import Header from "./child_components/header"

import IntoTemp from "./child_components/intotemp"
import Section2 from "./child_components/section2"

// import Section4 from "./child_components/section4"

function About() {
    return (
        <div >
           
            <Header />
            <IntoTemp service={"About Us"} url={"about"} />
            <Section2 visible={"hideclass"} img={"https://media.istockphoto.com/id/1568199725/photo/businessmen-shaking-hands-both-are-dressed-in-business-clothing-and-there-is-paperwork-with.webp?b=1&s=170667a&w=0&k=20&c=5RHqq3AJyJ5k_JFgJMWEU66YaMPxLfCEBAhaRCgxBCw="} />
           
            
            <div data-aos="fade-up"><Footer /></div></div>

    )
}
export default About