import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
const BASE_PATH = '/home/nick/www/AI-Stuff/image-helper/images/';
const IMAGE_FILES = ['20230414_211015.jpg',
  '20230414_211048.jpg',
  '20230414_211421.jpg',
  '20230414_211447.jpg',
  '20230414_211727.jpg',
  '20230414_212318.jpg',
  '20230414_212335.jpg',
  '20230414_222346.jpg',
  '20230414_222433.jpg',
  '20230414_222506.jpg',
  '20230414_211019.jpg',
  '20230414_211330.jpg',
  '20230414_211423.jpg',
  '20230414_211712.jpg',
  '20230414_211925.jpg',
  '20230414_212319.jpg',
  '20230414_212337.jpg',
  '20230414_222353.jpg',
  '20230414_222435.jpg',
  '20230414_222508.jpg',
  '20230414_211024.jpg',
  '20230414_211332.jpg',
  '20230414_211425.jpg',
  '20230414_211713.jpg',
  '20230414_212001.jpg',
  '20230414_212320.jpg',
  '20230414_222301.jpg',
  '20230414_222355.jpg',
  '20230414_222438.jpg',
  '20230414_222513.jpg',
  '20230414_211027.jpg',
  '20230414_211334.jpg',
  '20230414_211426.jpg',
  '20230414_211715.jpg',
  '20230414_212108.jpg',
  '20230414_212321.jpg',
  '20230414_222307.jpg',
  '20230414_222357.jpg',
  '20230414_222441.jpg',
  '20230414_222514.jpg',
  '20230414_211030.jpg',
  '20230414_211337.jpg',
  '20230414_211428.jpg',
  '20230414_211718.jpg',
  '20230414_212216.jpg',
  '20230414_212324.jpg',
  '20230414_222316.jpg',
  '20230414_222425.jpg',
  '20230414_222458.jpg',
  '20230523_201204.jpg',
  '20230414_211034.jpg',
  '20230414_211340.jpg',
  '20230414_211431.jpg',
  '20230414_211721.jpg',
  '20230414_212236.jpg',
  '20230414_212325.jpg',
  '20230414_222339.jpg',
  '20230414_222426.jpg',
  '20230414_222459.jpg',
  '20230523_201221.jpg',
  '20230414_211039.jpg',
  '20230414_211352.jpg',
  '20230414_211433.jpg',
  '20230414_211723.jpg',
  '20230414_212307.jpg',
  '20230414_212326.jpg',
  '20230414_222341.jpg',
  '20230414_222428.jpg',
  '20230414_222501.jpg',
  '20230523_201229.jpg',
  '20230414_211043.jpg',
  '20230414_211417.jpg',
  '20230414_211435.jpg',
  '20230414_211724.jpg',
  '20230414_212316.jpg',
  '20230414_212331.jpg',
  '20230414_222343.jpg',
  '20230414_222430.jpg',
  '20230414_222503.jpg'];

const Wrapper = styled.div`
  margin: .1rem 0;
  padding: .1rem 0;
`;

export const UploadDiv = ({setSelectedImage}) => {


  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  const handleSelectChange = async (event) => {
    const filePath = `${BASE_PATH}/${event.target.value}`;

    try {
      const response = await fetch(filePath);
      console.log(response);
      const blob = await response.blob();
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(blob);
    } catch (error) {
      console.error(error);
    }
  };


  return <Wrapper>
    <input type="file" onChange={handleFileChange}/>
    <select onChange={handleSelectChange}>
      <option></option>
      {IMAGE_FILES.map((file) => (
        <option key={file} value={file}>
          {file}
        </option>
      ))}
    </select>
  </Wrapper>;
};

export default UploadDiv;