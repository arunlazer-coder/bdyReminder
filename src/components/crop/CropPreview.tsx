import React, { useState, useRef, useEffect, forwardRef } from "react";

import ReactCrop, { Crop, PixelCrop } from "react-image-crop";

import "react-image-crop/dist/ReactCrop.css";
import { useDebounceEffect } from "./useDebounceEffect";
import { canvasPreview } from "./canvasPreview";
import Modal from "../modal";

// This is to demonstate how to make and center a % aspect crop
// which is a bit trickier so we use some helper functions.

export default forwardRef(function Croppin({ setFile }: any, fileRef: any) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  const imgRef = useRef<HTMLImageElement>(null);
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const aspect: number | undefined = 1 / 1;
  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setModalOpen(true);
      setCrop(undefined); // Makes crop preview update between images.
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setImgSrc(reader.result?.toString() || "")
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function onDownloadCropClick() {
    setModalOpen(false)
    if (!previewCanvasRef.current) {
      throw new Error("Crop canvas does not exist");
    }
    previewCanvasRef.current.toBlob((blob) => {
      if (!blob) {
        throw new Error("Failed to create blob");
      }
      setFile(blob);
    });
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          1,
          0
        );
      }
    },
    100,
    [completedCrop]
  );

  return (
    <div className="App">
      <div className="Crop-Controls">
        <input
          ref={fileRef}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={onSelectFile}
        />
      </div>

      <Modal open={isModalOpen} handleOpen={() => setModalOpen((cur) => !cur)}>
        <div className="lg:flex lg:h-screen justify-between">
          {!!imgSrc && (
            <div className="lg:grid place-items-center lg:h-screen w-1/2">
              <ReactCrop
                crop={crop}
                onChange={(_, percentCrop) => setCrop(percentCrop)}
                onComplete={(c) => setCompletedCrop(c)}
                aspect={aspect}
              >
                <img
                  ref={imgRef}
                  alt="Crop me"
                  src={imgSrc}
                  style={{ transform: `scale(${1}) rotate(${0}deg)` }}
                />
              </ReactCrop>
            </div>
          )}

          {!!completedCrop && (
            <div className="lg:grid place-items-center lg:h-screen w-1/2">
              <div className="flex justify-between w-4/5">
                <canvas
                  ref={previewCanvasRef}
                  style={{
                    border: "1px solid black",
                    objectFit: "contain",
                    width: completedCrop.width,
                    height: completedCrop.height,
                  }}
                />
                <button onClick={onDownloadCropClick}>Ok</button>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
});
