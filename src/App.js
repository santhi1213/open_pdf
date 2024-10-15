import React, { useState } from 'react';
import './App.css';

function App() {

  const [pdfFile, setPdfFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleChangeFile = (e) =>{
    const file = e.target.files[0];

    if(file && file.type === 'application/pdf'){
      const fileUrl = URL.createObjectURL(file);
      setPdfFile(file);
      setPdfUrl(fileUrl);
    }
    else{
      alert('Upload a valid file..')
    }
  }


  const handleViewPdf = ()=>{
    if(pdfFile){
      setIsModalOpen(true)
    }
    else{
      alert('Upload PDF first...')
    }
  }


  const handleCloseFile = () =>{
    setIsModalOpen(false)
  }

  return (
    <div className='container'>
      <h1>Upload PDF</h1>
      <input type='file' onChange={handleChangeFile} />
      <button onClick={handleViewPdf} >View</button>

      {isModalOpen && (
        <div className='pop-up'>
          <button onClick={handleCloseFile}>Close</button>
          <iframe src={pdfUrl} frameBorder='0' title='pdf-view'/>
        </div>
      )}
    </div>
  );
}

export default App;
