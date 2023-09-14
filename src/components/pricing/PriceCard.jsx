import React from "react"
import { price } from "../../dummydata"

const PriceCard = () => {

 
  const downloadPdf = () => {
    const pdfUrl = 'Intro.pdf'; 
    const downloadLink = document.createElement('a');
    downloadLink.style.display = 'none';
    downloadLink.href = pdfUrl;
    downloadLink.download = 'Intro.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <>
      {price.map((val) => (
        <div className='items shadow'>
          <h4>{val.name}</h4>
          <h1>
            {val.price}
          </h1>
          <button className='outline-btn' onClick={downloadPdf}>Download</button>
        </div>
      ))}
    </>
  )
}

export default PriceCard
