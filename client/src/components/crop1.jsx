import Footer from "./child_components/footer"
import Header from "./child_components/header"
import IntoTemp from "./child_components/intotemp"
import { useEffect, useState } from "react"
import ServiceSection1 from "./child_components/service_section"

import Ssection2 from "./child_components/service_section2"







function Crop1() {
    
    
    const [modal , setmodal] = useState(false)
    const [cropArr , setcropArr] = useState({Nitrogen_content:"" ,Phosphorus_content:"", Pottasium_content:"",ph_value:"",r_value:"",city:"" });
    const [fdata , setfdata] = useState("")
    useEffect(()=>{},[setmodal])
    const handleSubmit = async (e) =>{
        e.preventDefault()
        console.log(cropArr)
        const data = await fetch("http://127.0.0.1:5000/crop_upload", {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                n: cropArr.Nitrogen_content,
                p: cropArr.Phosphorus_content,
                k: cropArr.Pottasium_content,
                ph: cropArr.ph_value,
                r: cropArr.r_value,
                city: cropArr.city
              }),
            })
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
        setcropArr({ ...cropArr, [e.target.name]: e.target.value });
    }
    

    return (<div>

        <Header />
        <IntoTemp service={"Crop Recommendation"} no={3} url={"Crop_Recommendation"} />
        <form className="my-10 flex flex-col space-y-4 z-10" >
    <div className="flex flex-col mx-24">
        <label htmlFor="Nitrogen_content" className="text-center">Nitrogen_content</label>
        <input onChange={(e)=>{handleInput(e)}} type="text" name="Nitrogen_content" id="Nitrogen_content" className="w-full h-[25px]  text-center" placeholder=" " required  value={cropArr.Nitrogen_content}  />
    </div>
    <div className="flex flex-col mx-24">
        <label htmlFor="Phosphorus_content" className="text-center">Phosphorus_content</label>
        <input  onChange={(e)=>{handleInput(e)}} type="text" name="Phosphorus_content" id="Phosphorus_content" className="w-full h-[25px]  text-center" placeholder=" " required value={cropArr.Phosphorus_content} />
    </div>
    <div className="flex flex-col mx-24">
        <label htmlFor="Pottasium_content" className="text-center">Pottasium_content</label>
        <input onChange={(e)=>{handleInput(e)}} type="text" name="Pottasium_content" id="Pottasium_content" className="w-full h-[25px]  text-center" placeholder=" " required value={cropArr.Pottasium_content}  />
    </div>
    
      <div className="flex flex-col mx-24">
          <label htmlFor="ph_value" className="text-center">ph value</label>
          <input onChange={(e)=>{handleInput(e)}} type="text" name="ph_value" id="ph value" className="w-full h-[25px]  text-center" placeholder=" " required  value={cropArr.ph_value}  />
      </div>
      <div className="flex flex-col mx-24">
          <label htmlFor="r_value" className="text-center">r value</label>
          <input onChange={(e)=>{handleInput(e)}} type="text" name="r_value" id="r value" className="w-full h-[25px]  text-center" placeholder=" " required value={cropArr.r_value} />
      </div>
    
    
      <div className="flex flex-col mx-24">
          <label htmlFor="city" className="text-center">City</label>
          <input onChange={(e)=>{handleInput(e)}} type="text" name="city" id="city" className="w-full h-[25px] text-center" placeholder=" " required  value ={cropArr.city} />
      </div>
    <button onClick={handleSubmit} type="submit" className=" text-white bg-blue-700 self-center hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-fit px-5 py-2.5 text-center dark: dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  </form>
 
  {modal ?<div className="fixed top-[1rem] w-[90vw] h-[90vh] z-40" style={{height:'50vh' , width:'50vw' , marginLeft:'24rem' , marginTop:'8rem' , backgroundColor:'white'}}>

<h1 class="text-4xl text my-4" style={{marginLeft:'3rem' , fontWeight:'bold'}}>Crop Name :- {fdata&& fdata.crop_name}</h1>

<div class=" w-full h-[60vh] flex flex-col ">
    <div class="heading text- text-xl m-5 font-semibold" style={{marginLeft:'-1rem' , fontWeight:'500'}}>
        1. Fertilizer Name :-  
        {fdata&& fdata.fertilizer_name.map((item)=>{
            return <span>{item} , </span> 
        })}
    </div>
    <div class="heading text text-xl m-5 font-semibold" style={{marginLeft:'-1rem' , fontWeight:'500'}}>
        2. Tools :- 
        {fdata&& fdata.tools.map((item)=>{
            return  <span> {item} , </span> 

        })}
    </div>
    <i onClick={()=>{setmodal(false)}} class="fa-solid fa-circle-xmark" style={{position:'absolute' , top:'1rem', right:'2rem', color:"blue" , fontSize:'2.5rem'}}></i>
   
</div></div>:""}
        <Footer />
    </div>)
}
export default Crop1