/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';

const FileUploadForm = ({ portalId, contentType }) => {
  const [File, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);

    if (portalId === 1) {
      setTextContentType('text/plain');
    }
  };

  const handleUpload = async () => {
    const token1 = sessionStorage.getItem('token');
    const token = token1.replace(/^"(.*)"$/, '$1');

    const data = new FormData();

    if (File) {
      data.append('file_content', File);
      data.append('content', '');
      data.append('content_type', contentType);
      data.append('token', token);
      data.append('portal_id', portalId);
    } else {
      console.error('No file selected');
    }

    setLoading(true);

    await axios
      .post('https://cdn.defencepost.in/ches_team_app/index.php/apis/upload_portal_content', data)
      .then((Response) => {
        alert(Response.data.message);
        console.log('file uploaded', Response);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  };

  return (
    <>
      {loading ? (
        <div className='flex items-center justify-center'>
          <div className='animate-spin rounded-full h-20 w-20 border-t-4 border-accent-400 border-solid'></div>
        </div>
      ) : (
        <div>
          <h2 className='text-white font-medium mb-1 ml-2 pt-2'>
            Portal {portalId}, content-Type {contentType}
          </h2>

          <form className='sm:flex'>
            <input
              type='file'
              onChange={handleFileChange}
              className='bg-secondary-600 py-2 px-6 rounded-xl outline-none sm:w-[400px] w-fit text-text-100 font-bold shadow-md hover:bg-secondary-800 mr-4 ml-2 mb-3'
            />
            <div>
              <button
                type='button'
                className='bg-secondary-600 py-2 px-6 rounded-xl outline-none w-fit text-text-100 font-bold shadow-md hover:bg-secondary-800 ml-2 mt-1'
                onClick={handleUpload}
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default FileUploadForm;
