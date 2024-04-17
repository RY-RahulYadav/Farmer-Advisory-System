import Footer from "./child_components/footer"
import Header from "./child_components/header"

import Section1 from "./child_components/section1"
import Section2 from "./child_components/section2"

import Section4 from "./child_components/section4"
import Section5 from "./child_components/section5"

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
    duration: 600,
    once: false,
    
    easing: 'ease-in',
    once: true,
}
    
);



function Home(){
    return(
        <>
         
         <Header/>
         <Section1/>
         <div data-aos="fade-up"><Section2/></div>
         <div data-aos="fade-left"><Section5/></div>
         <div data-aos="fade-right"><Section4/></div>
         
         {/* <div data-aos="fade-right"><Section6/></div> */}
         <div data-aos="fade-up"><Footer/></div>
        </>
    )
}
export default Home