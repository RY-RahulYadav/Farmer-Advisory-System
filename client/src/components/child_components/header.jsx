import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Header() {
    const [opendropdown, setopendropdown] = useState(false)
    const [opennav2, setopennav2] = useState(false)
    const navigate = useNavigate()

    function updatedropdown() {
        setopendropdown((prev) => {
            return !prev
        })
    }
    function updatenav2() {
        setopennav2((prev) => {
            return !prev
        })
    }
    return (
        <> <nav>
            <div className="headerBox hidemainnav">
                <div className="headerBox1">
                    <img src="https://res.cloudinary.com/teepublic/image/private/s--GE6m_WF---/c_crop,x_10,y_10/c_fit,h_799/c_crop,g_north_west,h_1038,w_1038,x_-226,y_-119/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-337,y_-230/b_rgb:000000/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1569212629/production/designs/6059353_0.jpg" alt="" />
                    <p className="logo">LeafAndPlant</p>
                </div>
                <div className="headerBox2">
                    <li><Link className="liA" to="/">Home</Link></li>
                    <li><Link className="liA" to="/about">About</Link></li>
                    <li class="dropdown">
                        <a className="liA dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Service
                        </a>
                        <ul class="dropdown-menu">
                            <li><Link class="dropdown-item" to="/service/crop_recommend">Crop Recommendation</Link></li>
                            <li><Link class="dropdown-item" to="/Service/crop_fire">Crop Fire </Link></li>
                            <li><Link class="dropdown-item" to="/Service/crop_disease">Crop Disease</Link></li>
                        </ul></li>
                    <li><Link className="liA" to="/contact">Contact</Link></li>
                </div>
                <div className="headerBox3">
                    <button onClick={() => { navigate("/about") }}>Explore More</button>
                </div>

            </div>
            <div className="hbnavbox hidehnav">
                <div className="headerBox1">
                    <img src="https://res.cloudinary.com/teepublic/image/private/s--GE6m_WF---/c_crop,x_10,y_10/c_fit,h_799/c_crop,g_north_west,h_1038,w_1038,x_-226,y_-119/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-337,y_-230/b_rgb:000000/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1569212629/production/designs/6059353_0.jpg" alt="" />
                    <p className="logo">LeadSolution4U</p>
                </div>
                <div className="hbnav" onClick={updatenav2}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTF1KHw9jY_0SfjemE_MVoA9A4XSsPMn0C_c9YaPmAgoLSR4x5zA1HaWVK26DSvG41QEU&usqp=CAU" alt="" />
                </div>
               


            </div>

        </nav>
        
            {opennav2 && <div className="nav2box  hidehnav">
               
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about"> About</Link></li>
                <li onClick={updatedropdown}><a >Service<i class="fa-solid fa-caret-down"></i></a>
                    {opendropdown && <ul>
                        <li><Link to="/service/bulk_sms">Bulk sms</Link></li>
                        <li><Link to="/Service/bulk_whatsapp">Bulk Whatsapp</Link></li>
                        <li><Link to="/Service/lead_gen">Lead Generation Device</Link></li>
                    </ul>}
                </li>

                <li><Link to="/contact">Contact Us</Link></li>
            </div>}

        </>
    )
}
export default Header