import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Folder from '../Components/Folder';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
export default function FolderRow() {
  const [completeList, setCompleteList] = useState([]);

  chrome.storage.sync.get(['key'], function (result) {
    // console.log('받아온 결과');
    setCompleteList(result.key);
  });

  return (
    <Container>
      {completeList.map((data, index) => {
        return (
          <Folder
            key={index}
            favIconUrl={data.favIconUrl}
            title={data.title}
            url={data.url}
          />
        );
      })}
    </Container>
  );
}
