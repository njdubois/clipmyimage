import React, { useState } from 'react';
import styled from 'styled-components';

const PreviewWrapper = styled.div`
  margin: 5px;
  padding: 5px;
  border: 1px solid black;
  display: inline-block;
`;

const PreviewValues = styled.div`

`;

const PreviewImage = styled.img`

`;

const Setting = styled.div`
  padding: 2px;
  
   label {
     padding-right: 5px;
   }
  
  button {
    margin-right: 5px;
    padding:5px;
  }
`;

export const ClipPreview = (
  {
    index, aClip, setClipCollection, clipCollection
  }
) => {

  const [hasGuitar, setHasGuitar] = useState('Yes');
  const [numStrings, setNumStrings] = useState(0);
  const [numFrets, setNumFrets] = useState(0);


  const handleSave = (dataUrl) => {
    const link = document.createElement('a');
    link.href = dataUrl;
    const timestamp = Math.floor(Date.now() / 1000);

    link.download = `${timestamp}_hasGuitar-${hasGuitar}_strings-${numStrings}_frets-${numFrets}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDelete = (id) => {
    const collection = [...clipCollection];
    collection.splice(id, 1);

    setClipCollection(collection);

  };

  return (
    <PreviewWrapper key={index}>
      <PreviewImage src={aClip} />
      <PreviewValues>
        <Setting>
          <label>
            Has Guitar
          </label>
          <select
            onChange={(e) => {
              setHasGuitar(e?.target?.value);
            }}
            value={hasGuitar}
          >
            <option id='Yes'>
              Yes
            </option>

            <option id='No'>
              No
            </option>
          </select>

        </Setting>
        <Setting>
          <label>
            # Strings
          </label>
          <input
            onChange={(e) => {
              setNumStrings(e?.target?.value);
            }}
            type='number'
            value={numStrings}
            step='1'
          />
        </Setting>
        <Setting>
          <label>
            # Frets
          </label>
          <input
            onChange={(e) => {
              setNumFrets(e?.target?.value);
            }}
            type='number'
            value={numFrets}
            step='1'
          />
        </Setting>
        <Setting>
          <button onClick={() => handleSave(aClip)}>Save</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </Setting>

      </PreviewValues>
    </PreviewWrapper>
  );
};

export default ClipPreview;