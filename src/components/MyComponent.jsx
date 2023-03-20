import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

const MyComponent = () => {

  const video = useRef(null);

  const [image, setImage] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      sendImage();
    }, 300);

    return () => clearInterval(intervalId);
  }, []);

  const openCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: { width:300, height:300 } }).then((stream) => {
      video.current.srcObject = stream;
    }).catch((err) => {
      console.log(err);
    });
  };

  const closeCamera = () => {
    video.current.srcObject.getTracks().forEach(track => track.stop());
  };

  const sendImage = () => {
    const videoC = document.getElementById('video');
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 300;
    canvas.getContext('2d').drawImage(videoC, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
      const formData = new FormData();
      formData.append('qrCode', blob, 'image.jpg');
      setImage(blob);
      axios.post('http://localhost:8889/customer-transaction/read-qr', formData)
      .then(response => {
        if(response.data.status === 200) {
          console.log(response.data);
          closeCamera();
        }
      })
      .catch(error => {
        console.error(error);
      });
    }, 'image/jpeg', 0.7);
  };

  return (
    <div>
      <video ref={video} id="video" autoPlay muted></video>
      <button onClick={openCamera}>Open Camera</button>
      {image && <img src={URL.createObjectURL(image)} alt="image" />}
    </div>
  );
};

export default MyComponent;