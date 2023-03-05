import { IconUpload } from 'components';
import React from 'react';
import axios from 'axios';
import { imgbbAPI } from 'config/config';
import { toast } from 'react-toastify';

const ImageUpload = ({ onChange = () => {}, name = '' }) => {
  const handleUploadImage = async (e) => {
    const file = e.target.files;
    if (!file) return;
    const bodyFormData = new FormData();
    bodyFormData.append('image', file[0]);
    const response = await axios({
      method: 'post',
      url: `${imgbbAPI}`,
      data: bodyFormData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const imageData = response.data.data;
    if (!imageData) {
      toast.error(`Upload image failed!`);
      return;
    }
    const imageObj = {
      medium: imageData.medium.url,
      thumb: imageData.thumb.url,
      url: imageData.url,
    };
    onChange(name, imageObj);
  };
  return (
    <label className="border border-dashed border-gray-200 rounded-xl w-full h-[200px] cursor-pointer flex items-center justify-center">
      <input type="file" onChange={handleUploadImage} className="hidden" />
      <IconUpload />
    </label>
  );
};

export default ImageUpload;
