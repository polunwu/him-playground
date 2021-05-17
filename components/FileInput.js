import React, { useState } from 'react'
import Image from 'next/image'

export default function FileInput() {
  const [imgUrl, setImgUrl] = useState(
    'https://images.unsplash.com/photo-1571453818328-b15ea3ba8ea8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80'
  )

  const fileChange = (e) => {
    const fileList = e.target.files
    let file = null
    for (let i = 0; i < fileList.length; i++) {
      if (fileList[i].type.match(/^image\//)) {
        file = fileList[i]
        break
      }
    }

    if (file !== null) {
      setImgUrl(URL.createObjectURL(file))
    }
  }

  return (
    <div className="file-input-wrapper">
      <label className="upload-btn">
        上傳照片
        <input type="file" accept="image/*" capture onChange={fileChange} />
      </label>
      <img src={imgUrl} alt="capture-output" className="capture-output" />
    </div>
  )
}
