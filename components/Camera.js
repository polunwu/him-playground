import React, { useRef, useEffect, useState } from 'react'

export default function Camera() {
  const [supportMsg, setSupportmsg] = useState(null)
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const [showCanvas, setShowCanvas] = useState(false)
  const constraints = {
    video: true,
  }

  const startStream = () => {
    const supported = 'mediaDevices' in navigator
    if (supported) {
      // Attach the video stream to the video element and autoplay.
      navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        videoRef.current.srcObject = stream
      })
    } else {
      setSupportmsg('不支援取用相機')
    }
  }

  const captureImage = () => {
    const canvas = canvasRef.current
    const video = videoRef.current

    canvas.width = video.offsetWidth // canvas 寬等於 video 元素寬
    canvas.height = video.offsetHeight // canvas 高等於 video 高素寬

    const wRatio = canvas.width / video.videoWidth // canvas 寬相對截圖照片寬的比例
    const hRatio = canvas.height / video.videoHeight // canvas 高相對截圖照片高的比例

    const ratio = Math.max(wRatio, hRatio)
    const offsetX =
      hRatio > wRatio ? (canvas.width - video.videoWidth * hRatio) / 2 : 0
    const offsetY =
      wRatio > hRatio ? (canvas.height - video.videoHeight * wRatio) / 2 : 0

    canvas
      .getContext('2d')
      .drawImage(
        video,
        offsetX,
        offsetY,
        video.videoWidth * ratio,
        video.videoHeight * ratio
      )
    setShowCanvas(true)
  }

  return (
    <div className="camera-wrapper">
      {supportMsg && <p>{supportMsg}</p>}
      <video id="player" ref={videoRef} autoPlay playsInline></video>
      <canvas
        id="canvas"
        ref={canvasRef}
        className={showCanvas ? 'show' : ''}
      ></canvas>
      <div>
        <button className="capture-btn" onClick={startStream}>
          取用相機
        </button>
        <button className="capture-btn" onClick={captureImage}>
          拍照
        </button>
      </div>
    </div>
  )
}
