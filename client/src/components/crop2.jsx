import { useState } from "react"
import Footer from "./child_components/footer"
import Header from "./child_components/header"
import IntoTemp from "./child_components/intotemp"
import ServiceSection1 from "./child_components/service_section"
import Ssection2 from "./child_components/service_section2"
import { useEffect } from "react"


function Crop2() {
    const [modal , setmodal] = useState(false)
    const [cropArr1 , setcropArr1] = useState({Temperature:"" ,Humidity:"", co2:"" });
    const [fdata , setfdata] = useState({})
    useEffect(()=>{},[modal])
    const handleSubmit = async (e) =>{
        e.preventDefault()
        console.log(cropArr1)
        const data = await fetch("http://127.0.0.1:5000/crop_fire", {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                t:cropArr1.Temperature,
                h:cropArr1.Humidity,
                co2:cropArr1.co2
              }),
            });
        const res_data = await data.json();
        console.log(res_data)
        setfdata(res_data)
        setmodal(true)
       
    
    }
    
    const handleInput = (e) =>{
        // myname = e.target.name
        // value = e.target.values
        // setcropArr(prev =>{
        //     return {
        //         ...prev,
        //         [myname]:value
        //     }
        // })
        setcropArr1({ ...cropArr1, [e.target.name]: e.target.value });
    }
    return (<div>

        <Header />
        <IntoTemp service={"Crop Fire"} no={3} url={"crop_fire"} />
        <form className="my-10 flex flex-col space-y-4 z-10" >
    <div className="flex flex-col mx-24">
        <label htmlFor="Temperature" className="text-center">Temperature</label>
        <input onChange={(e)=>{handleInput(e)}} type="text" name="Temperature" id="Temperature" className="w-full h-[25px]  text-center" placeholder=" " required  value={cropArr1.Temperature}  />
    </div>
    <div className="flex flex-col mx-24">
        <label htmlFor="Humidity" className="text-center">Humidity</label>
        <input  onChange={(e)=>{handleInput(e)}} type="text" name="Humidity" id="Humidity" className="w-full h-[25px]  text-center" placeholder=" " required value={cropArr1.Humidity} />
    </div>
    <div className="flex flex-col mx-24">
        <label htmlFor="co2" className="text-center">co2</label>
        <input onChange={(e)=>{handleInput(e)}} type="text" name="co2" id="co2" className="w-full h-[25px]  text-center" placeholder=" " required value={cropArr1.co2}  />
    </div>
    <button onClick={handleSubmit} type="submit" className=" text-white bg-blue-700 self-center hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-fit px-5 py-2.5 text-center dark: dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
     
    {modal &&<div className="fixed top-[1rem] w-[90vw] h-[90vh] z-40" style={{height:'30vh' , width:'30vw' , marginLeft:'35rem' , marginTop:'7rem' , backgroundColor:'white' , borderRadius:'2rem'}}>

    <h1 class="text-4xl text my-4" style={{marginLeft:'3rem' ,position:'relative',top:'3.8rem',left:'0.8rem', fontWeight:'bold'}}>{fdata&& fdata.fire}</h1>

    <div class=" w-full h-[60vh] flex flex-col ">
        
        
        <i onClick={()=>{setmodal(false)}} class="fa-solid fa-circle-xmark" style={{position:'absolute' , top:'1rem', right:'2rem', color:"blue" , fontSize:'2.5rem'}}></i>
       
    </div></div>}
      
        <Footer />
    </div>)
}
export default Crop2