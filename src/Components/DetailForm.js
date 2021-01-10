import React from 'react';
import styled from 'styled-components';
import backSpace from '../assets/img/backSpace';
import DetailWhiteButton from './DetailWhiteButton';
import DetailPurpleButton from './DetailPurpleButton';
import OptionIcon from './OptionIcon';


export default function DetailForm({ folder_data, detailData }) {
  const { folder_title } = folder_data;
  const { favIconUrl, title, url } = detailData;
  return (
    <Container>
      <TitleRow>
        <Left>
          <BackSpace src={backSpace} />
          <Title>{folder_title}</Title>
        </Left>
        <Right>
          <DetailWhiteButton />
          <DetailPurpleButton />
        </Right>
      </TitleRow>
      <GrayHorizontail />
      <UrlListWrapper>
        <UrlRow>
          <UrlImage src={favIconUrl} />
          <UrlTitle>{title}</UrlTitle>
          <Url>{url}</Url>
          <OptionIcon />
        </UrlRow>
        <UrlRow>
          <UrlImage src={favIconUrl} />
          <UrlTitle>{title}</UrlTitle>
          <Url>{url}</Url>
          <OptionIcon />
        </UrlRow>
      </UrlListWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
  border-radius: 10px;

  margin-left: 30px;
  padding: 38px 53px 53px 43px;
  box-sizing: border-box;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BackSpace = styled.img`
  width: 30px;
  height: 30px;

  margin-right: 22px;
`;

const Title = styled.div`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #070701;
`;

const GrayHorizontail = styled.div`
  margin-top: 25px;
  height: 0;
  border: 1px solid rgba(222, 227, 230, 0.8);
`;

const UrlListWrapper = styled.div`
  margin-top: 35px;
`;

const UrlRow = styled.div`
  display: flex;
  width: 100%;
  
  margin-top: 27px;
`;

const UrlImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 22px;
  flex-shrink: 0;
`;

const UrlTitle = styled.div`
  // Todo(maitracle): 이유는 모르지만 width값을 부여해야만 flex 속성이 작용하여 적절한 가로크기를 찾아간다.
  //                  이유를 찾아 width 속성 없이 해결한다.
  width: 10px;
  flex: 1 1 10px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: #000000;
`;

const Url = styled.div`
  flex: 0 0 240px;
  max-width: 240px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;

  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #90a0ad;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;
