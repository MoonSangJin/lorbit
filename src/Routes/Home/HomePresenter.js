import React from 'react';
import styled from 'styled-components';

import Background from '../../Components/Background';
import FolderRow from '../../Components/FolderRow';

const HomeScreenPresenter = ({ bookmarkFolderList }) => {
  return (
    <Container>
      <Background />

      {/*Todo(maitracle): 데모데이 버전에서는 search 기능을 지원하지 않는다.*/}
      {/*<SearchRow>*/}
      {/*  <SearchInput />*/}
      {/*</SearchRow>*/}

      <FolderRowWrapper>
        <FolderRow {...{ bookmarkFolderList, type: 'card' }} />
      </FolderRowWrapper>
    </Container>
  );
};
const Container = styled.div`
  max-width: 1185px;
  margin: 0 auto;
`;
// Todo(maitracle): search 기능을 사용할 때 주석을 해재한다.
// const SearchRow = styled.div`
//   display: flex;
//   justify-content: center;
// `;

const FolderRowWrapper = styled.div`
  margin-top: 47px;
`;

export default HomeScreenPresenter;
