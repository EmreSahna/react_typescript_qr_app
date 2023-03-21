import React, { useRef, useEffect, useState, SetStateAction } from "react";
import axios from "axios";
import useProductStore from "../../stores/productStore";
import { PayState } from "./types";
import useUserStore from "../../stores/userStore";
import PaymentService from "./service";

const Pay = () => {
  const productStore = useProductStore((state) => state);
  const userStore = useUserStore((state) => state);
  const video = useRef<HTMLVideoElement>(null!);
  const [paymentState, setPaymentState] = useState<PayState>({
    seller_id: "",
    customer_id: userStore.getUserDetails().id,
    amount: productStore.getProductDetails()[0].price,
    purchased_item_id: productStore.getProductDetails()[0].id,
  });
  const [stream, setStream] = useState<MediaStream | null>(null);

  const openCamera = () => {   
    navigator.mediaDevices.getUserMedia({ video: { width:300, height:300 } }).then((stream) => {
      video.current.srcObject = stream;
      setStream(stream);
    }).catch((err) => {
      console.log(err);
    });
  };

  const closeCamera = () => {
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => {
        track.stop();
      });
      setStream(null);
      video.current.srcObject = null;
    }
  };

  const captureImage = () => {
    const videoC = document.getElementById('video') as HTMLVideoElement;
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 300;
    canvas.getContext('2d')?.drawImage(videoC, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
      const formData = new FormData();
      formData.append('qrCode', blob as Blob, 'image.jpg');
      axios.post('http://localhost:8889/customer-transaction/read-qr', formData).then((response) => {
        setPaymentState({...paymentState, seller_id: response.data.seller_id});
        closeCamera();
      }).catch((error) => {
        setTimeout(() => {
          captureImage();
        }, 300);
      });
    }, 'image/jpeg', 0.7);
  };

  const startImageCapture = () => {
    if (stream) {
      captureImage();
    } else {
      console.log('Kamera açık değil');
    }
  };

  const doPayment = () => {
    PaymentService.pay(paymentState).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }
    

  return (
    <div>
      <video ref={video} id="video" autoPlay muted></video>
      <button onClick={openCamera}>Open Camera</button>
      <button onClick={startImageCapture}>Start</button>
          <div>
            <button onClick={doPayment}>Do Payment</button>
          </div>
    </div>
  );
};

export default Pay;