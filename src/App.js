import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ScrollableDiv from './components/ScrollableDiv';
import ParentCanvas from './components/ParentCanvas';
import PreviewSettings from './components/PreviewSettings';
import ClipPreviewList from './components/ClipPreviewList';
import UploadDiv from './components/UploadDiv';



const Clipper = styled.div`
  display: flex;
`;

function App() {

  const [parentXOffset, setParentXOffset] = useState(0);
  const [parentYOffset, setParentYOffset] = useState(0);

  const [selectedImage, setSelectedImage] = useState();
  const [canvasRef, setCurrentCanvasRef] = useState();
  const [previewSize, setPreviewSize] = useState({width: 150, height: 150});
  const [parentSize, setParentSize] = useState({width: 750, height: 750});

  const [imageScale, setImageScale] = useState(1);
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
  const [clipCollection, setClipCollection] = useState([]);

  const currentXOffset = ( (parentSize.width / 2) - (previewSize.width / 2) );
  const currentYOffset = ( (parentSize.height / 2) - (previewSize.height / 2) );

  useEffect(()=>{

  }, [parentXOffset, parentYOffset]);


  const handleScroll = (e) => {
    setScrollPosition({ x: e.target.scrollLeft, y: e.target.scrollTop });
  };
console.log("selectedImage : ", selectedImage);
  const takeClip = () => {
    if (canvasRef) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      const imageData = context.getImageData(scrollPosition.x + currentXOffset, scrollPosition.y + currentYOffset, previewSize.width, previewSize.height);
      const tempCanvas = document.createElement('canvas');
      const tempContext = tempCanvas.getContext('2d');
      tempCanvas.width = imageData.width;
      tempCanvas.height = imageData.height;
      tempContext.putImageData(imageData, 0, 0);
      const dataURL = tempCanvas.toDataURL();

      if (clipCollection.length) {
        setClipCollection([...clipCollection, dataURL])
      } else {
        setClipCollection([dataURL])
      }
    }
  }

  return (
    <div className="App">
      <UploadDiv setSelectedImage={setSelectedImage} />
      <Clipper>
        <ScrollableDiv
          onScroll={handleScroll}
          width={parentSize.width}
          height={parentSize.height}
        >
          <ParentCanvas
            // img="20230414_222357.jpg"
            img={selectedImage && selectedImage}
            scale={imageScale}
            x={scrollPosition.x + currentXOffset }
            y={scrollPosition.y + currentYOffset }
            width={previewSize.width}
            height={previewSize.height}
            setRef={setCurrentCanvasRef}
            parentXOffset={parentXOffset}
            parentYOffset={parentYOffset}
          />
        </ScrollableDiv>

        <PreviewSettings
          setImageScale={setImageScale}
          imageScale={imageScale}
          setParentSize={setParentSize}
          parentSize={parentSize}
          setPreviewSize={setPreviewSize}
          previewSize={previewSize}
          takeClip={takeClip}
          setParentXOffset={setParentXOffset}
          setParentYOffset={setParentYOffset}
          parentXOffset={parentXOffset}
          parentYOffset={parentYOffset}
        />

        <ClipPreviewList
          clipCollection={clipCollection}
          setClipCollection={setClipCollection}
        />
      </Clipper>
    </div>
  );
}

export default App;
