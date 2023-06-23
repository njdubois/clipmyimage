import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width:400px;
  min-width:400px;
`;

const Setting = styled.div`
  padding: 10px;
  
   label {
     padding-right: 5px;
   }
`;

export const PreviewSettings = (
  {
    setImageScale,
    imageScale,
    setParentSize,
    parentSize,
    setParentXOffset,
    parentXOffset,
    parentYOffset,
    setParentYOffset,
    setPreviewSize,
    previewSize,
    takeClip
  }
) => {

  return (
    <Wrapper>
      <Setting>
        <label>
          Scale:
        </label>
        <input
          onChange={(e) => {
            setImageScale(e?.target?.value);
          }}
          type='number'
          value={imageScale}
          step='.1'
        />
      </Setting>

      <Setting>
        <label>
          Parent Width:
        </label>
        <input
          onChange={(e) => {
            setParentSize({width: e?.target?.value, height: parentSize.height});
          }}
          type='number'
          value={parentSize.width}
          step='1'
        />
      </Setting>

      <Setting>
        <label>
          Parent Height:
        </label>
        <input
          onChange={(e) => {
            setParentSize({width: parentSize.width, height: e?.target?.value});
          }}
          type='number'
          value={parentSize.height}
          step='1'
        />
      </Setting>

      <Setting>
        <label>
          Parent X Offset:
        </label>
        <input
          onChange={(e) => {
            setParentXOffset(e?.target?.value);
          }}
          type='number'
          value={parentXOffset.width}
          step='1'
        />
      </Setting>

      <Setting>
        <label>
          Parent Y Offset:
        </label>
        <input
          onChange={(e) => {
            setParentYOffset(e?.target?.value);
          }}
          type='number'
          value={parentYOffset.width}
          step='1'
        />
      </Setting>

      <Setting>
        <label>
          Preview Width:
        </label>
        <input
          onChange={(e) => {
            setPreviewSize({width: e?.target?.value, height: previewSize.height});
          }}
          type='number'
          value={previewSize.width}
          step='1'
        />
      </Setting>

      <Setting>
        <label>
          Preview Height:
        </label>
        <input
          onChange={(e) => {
            setPreviewSize({width: previewSize.width, height: e?.target?.value});
          }}
          type='number'
          value={previewSize.height}
          step='1'
        />
      </Setting>

      <Setting>
        <button onClick={takeClip}>Save Current Preview</button>
      </Setting>

    </Wrapper>
  );
};

export default PreviewSettings;