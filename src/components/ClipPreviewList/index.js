import React, { useState } from 'react';
import styled from 'styled-components';
import ClipPreview from '../ClipPreview';

const Wrapper = styled.div`
  display: flex;
  overflow-x: scroll;
`;

export const ClipPreviewList = (
  {
    clipCollection,
    setClipCollection,
  }
) => {


  return (
    <Wrapper>
      {clipCollection && clipCollection.map((aClip, index) => {
        return (
          <ClipPreview aClip={aClip} index={index} clipCollection={clipCollection} setClipCollection={setClipCollection}/>
        );
      })}
    </Wrapper>
  );
};

export default ClipPreviewList;