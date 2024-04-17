import { Link } from "react-router-dom";

function Footer() {
  function   handleFuntion(){
      alert( "this page is not available")
    }
    return (
      <>
       <footer class="footer-distributed">

<div class="footer-left">

  <h3>Leaf<span>AndPlant</span></h3>

  <p class="footer-links">
    <Link onClick={()=>{window.scrollTo(0, 0);}} to="/" class="link-1">Home &nbsp;</Link>
    
    <Link onClick={()=>{window.scrollTo(0, 0);}} to="/about">About &nbsp;</Link>
  
  
   
    
    
    <Link onClick={()=>{window.scrollTo(0, 0);}} to="/contact">  Contact</Link>
  </p>

  <p class="footer-company-name" >Copyright LeafAndPlant © 2024. All rights reserved.</p>
</div>

<div class="footer-center">

  <div>
    <i class="fa fa-map-marker"></i>
    <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
  </div>

  <div>
    <i class="fa fa-phone"></i>
    <p>+1.555.555.5555</p>
  </div>

  <div>
    <i class="fa fa-envelope"></i>
    <p><a href="mailto:support@company.com">support@company.com</a></p>
  </div>

</div>

<div class="footer-right">

  <p class="footer-company-about">
    <span>About the company</span>
    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
  </p>

  <div class="footer-icons">

    <Link to="#"><i class="fa fa-facebook"></i></Link>
    <Link to="#"><i class="fa fa-instagram"></i></Link>
    <Link to="#"><i class="fa fa-telegram"></i></Link>
    

  </div>

</div>

</footer>
      </>
    );
  }
  
  export default Footer;