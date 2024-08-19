import { useState } from "react"
import Footer from "./child_components/footer"
import Header from "./child_components/header"
import IntoTemp from "./child_components/intotemp"
import ServiceSection1 from "./child_components/service_section"
import Ssection2 from "./child_components/service_section2"

import { useEffect } from "react"



function Crop3(){
    const [file, setFile] = useState(null);
    const [fdata,setfdata] = useState(null)
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

    const data = await fetch(`${import.meta.env.VITE_URL}/crop_disease`, {
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
    <h1 style={{margin:'auto' , fontSize:'3rem' , fontWeight:'bold'}}>Upload Crop/Leaf Image</h1>
    <div>
    {/* <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="large_size">Large file input</label> */}
    <input onChange={(event)=>{handleImageChange(event)}} type="file" name="fileV" id="fileV"  class="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"  style={{ margin:'auto',width:'50vw',  padding:'2rem' , paddingLeft:'17rem'}} />
    </div>
    

    <button  onClick={(event)=>{handlesubmit(event)}} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark: dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{margin:'2rem auto' , width:'50vw' }}>Submit</button>
    </form> 
    {modal &&<div className="fixed top-[1rem] w-[80vw] h-[80vh] z-40" style={{height:'95vh' , width:'95vw' , margin:'0rem 2rem', backgroundColor:'white', boxShadow: '0px 0px 10px 20px black;', borderRadius:'2rem' , border:'black solid 2px'}}>
{fdata?<div>
    <h1 class="text-4xl text my-4" style={{marginLeft:'3rem' , fontWeight:'bold'}}>Disease Name :- {fdata&& fdata.Disease_name}</h1>
    
<div class=" w-full h-[60vh] flex flex-col ">
    <div class="heading text- text-xl m-4 font-semibold" style={{marginLeft:'-1rem' , fontWeight:'500'}}>
        A. Cause  :- {fdata&& fdata.cause.map((item , index)=>{
            if(index>0 && index<5){
                return <li> {index}. {item}</li>
            }
        })}
         
        
    </div>
    
    <div class="heading text text-xl m-4 font-semibold" style={{marginLeft:'-1rem' , fontWeight:'500'}}>
        C. Treatment :- {fdata && fdata.treatment.map((item , index)=>{
            if(index>0 && index<4){
                return <li> {index}. {item}</li>
            }
        })}
        
    </div>
    <i onClick={()=>{setmodal(false)}} class="fa-solid fa-circle-xmark" style={{position:'absolute' , top:'1rem', right:'2rem', color:"blue" , fontSize:'2.5rem'}}></i>
   
</div>
</div>:<div></div>}


</div>}
        <Footer />
    </div>)
}
export default Crop3