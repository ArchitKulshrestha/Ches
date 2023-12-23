
import { useState } from 'react';
import React from 'react';
import FileUploadForm from './FileUploadForm';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PortalUploadPage = () => {
const [text , settext]=useState('')
const handlechange = (event)=>{
settext(event.target.value)

}
const handleclick = ()=> {
  <Link to = "/data" />
}
const handleupload = async(event) => {
  event.preventDefault();
  const token1 = localStorage.getItem('token');
    const token = token1.replace(/^"(.*)"$/, '$1');

  const data1 = new FormData();
  
          data1.append('content', text);
          data1.append('content_type', 'text'); // Use text content type
          data1.append('token', token);
          data1.append('portal_id', 1);
          const formDataEntries = data1.entries();
          const entriesArray = Array.from(formDataEntries);

          console.log(entriesArray);
      
          await axios
            .post('https://cdn.defencepost.in/ches_team_app/index.php/apis/upload_portal_content', data1)
            .then((Response) => {
              alert(Response.data.message);
              console.log('file uploaded', Response);
            })
            .catch((error) => {
              console.error('Error:', error);})
          
}
  return (
    <>
      <section className=" bg-background-950 w-full mx-auto ">  
        <h1 className=' text-text-100 font-bold shadow-md text-center mb-4 md:text-[75px] sm:text-[60px] text-[55px] font-OpenSans '>Upload your Files Here</h1>
      <form className='sm:flex' >
      <textarea
            value={text}
            onChange={handlechange}
            placeholder="Abstract"
            className='bg-secondary-600 py-2 px-6 rounded-xl outline-none sm:w-[400px] w-[350px] mr-4 text-text-100 font-bold shadow-md hover:bg-secondary-800 ml-2 '
          />
          <div>
        <button className='   bg-secondary-600 py-2 px-6 rounded-xl outline-none w-fit text-text-100 font-bold shadow-md hover:bg-secondary-800 ml-2 mt-2' onClick={handleupload}>upload</button></div>
      </form>
      <FileUploadForm portalId={2} contentType= "pdf"/>
      <FileUploadForm portalId={3} contentType= "video"/>
      <FileUploadForm portalId={3} contentType= "pdf"/>
      <FileUploadForm portalId={4} contentType= "pdf"/>
      <FileUploadForm portalId={5} contentType= "pdf"/>
      <FileUploadForm portalId={5} contentType= "image"/>
      <Link to="/data">
        
      <button className='   bg-secondary-600 py-2 px-6 rounded-xl outline-none w-fit text-text-100 font-bold shadow-md hover:bg-secondary-800 ml-2 mt-2' onClick={handleclick}>See Your Content</button>
       </Link>
      </section>  
    </>
  );
};

export default PortalUploadPage;
