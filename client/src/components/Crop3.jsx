import { useState } from "react"
import Footer from "./child_components/footer"
import Header from "./child_components/header"
import IntoTemp from "./child_components/intotemp"
import ServiceSection1 from "./child_components/service_section"
import Ssection2 from "./child_components/service_section2"

import { useEffect } from "react"



function Crop3(){
    const [file, setFile] = useState(null);
    const [fdata,setfdata] = useState("")
    const [modal , setmodal] = useState(false)
    useEffect(()=>{},[modal])
    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];

        if (!selectedFile) {
            alert('Please select an image file.');
            return;
        }

        setFile(selectedFile);
    };

 const  handlesubmit= async(event) =>{
    event.preventDefault();

    if (!file) {
        alert('Please select an image file.');
        return;
    }

    const formData = new FormData()
    formData.append('image', file)

    const data = await fetch('http://127.0.0.1:5000/crop_disease', {
            method: 'POST',
            body: formData
    })
    const res_data = await data.json();
    console.log(res_data)
    setfdata(res_data)
    setmodal(true)
       
    }


    return (<div>

        <Header />
        <IntoTemp service={"Crop Disease"} no={3} url={"Crop_Disease"} />
        <form className="my-10 flex flex-col space-y-4 z-10">
    <div className="flex flex-col">
        <label htmlFor="fileV" className="text-center">Upload image</label>
        <input onChange={(event)=>{handleImageChange(event)}} type="file" name="fileV" id="fileV" className="w-full h-[25px]" placeholder=" " required  />
    </div>
    <button  onClick={(event)=>{handlesubmit(event)}} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark: dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form> 
    {modal &&<div className="fixed top-[1rem] w-[90vw] h-[90vh] z-40" style={{height:'98vh' , width:'98vw' , marginLeft:'0.5rem' , marginTop:'0.5rem' , backgroundColor:'white'}}>

<h1 class="text-4xl text my-4" style={{marginLeft:'3rem' , fontWeight:'bold'}}>Disease Name :- {fdata&& fdata.Disease_name}</h1>

<div class=" w-full h-[60vh] flex flex-col ">
    <div class="heading text- text-xl m-5 font-semibold" style={{marginLeft:'-1rem' , fontWeight:'500'}}>
        A. Cause  :- {fdata&& fdata.cause.map((item , index)=>{
            if(index>0 && index<5){
                return <li> {index}. {item}</li>
            }
        })}
         {/* {fdata&& fdata.cause.map((item)=>{
            return <li>{item}</li>
        })} */}
        
    </div>
    {/* <div class="heading text text-xl m-5 font-semibold" style={{marginLeft:'-1rem' , fontWeight:'500'}}>
        B. Prevention :- {fdata&& fdata.prevention.map((item , index)=>{
            if(index>0 && index<4){
                return <li>{index} {item}</li>
            }
        })}
        
    </div> */}
    <div class="heading text text-xl m-5 font-semibold" style={{marginLeft:'-1rem' , fontWeight:'500'}}>
        C. Treatment :- {fdata && fdata.treatment.map((item , index)=>{
            if(index>0 && index<4){
                return <li> {index}. {item}</li>
            }
        })}
        
    </div>
    <i onClick={()=>{setmodal(false)}} class="fa-solid fa-circle-xmark" style={{position:'absolute' , top:'1rem', right:'2rem', color:"blue" , fontSize:'2.5rem'}}></i>
   
</div></div>}
        <Footer />
    </div>)
}
export default Crop3