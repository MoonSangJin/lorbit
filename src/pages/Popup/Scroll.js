import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import check from '../../assets/img/check.svg';
const SubmitForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const List = styled.div`
  height: 200px;
  overflow-y: scroll;
`;
const ListRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5px;
`;
const Image = styled.img`
  width: 19px;
  height: 19px;

  margin: 5px;
`;
const Title = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.03em;

  margin: 3px;
`;
const CheckLabel = styled.label`
  width: 28px;
  height: 23px;
  border-radius: 5px;
  border: 1.5px solid #d7dde2;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const CheckBox = styled.input`
  display: none;
  &:checked + ${CheckLabel} {
    background: #7785ff;
    background-image: url(${check});
    background-size: 100% 100%;
  }
`;

const Input = styled.input`
  all: unset;
  width: 238px;
  height: 40px;
  background: #f5f7f8;
  border: 1px solid #dee3e6;
  box-sizing: border-box;
  border-radius: 10px;
  text-indent: 10px;
  ::placeholder {
    font-size: 14px;
    line-height: 20px;
    color: #b5bdc2;
    letter-spacing: -0.02em;
  }

  margin-right: 10px;
`;
const Font = styled.div`
  height: 20px;
  margin: 10px;
  font-size: 14px;
  color: #90a0ad;

  margin-left: 15px;
`;
const InputRow = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 20px;
`;
const CompleteButton = styled.button`
  all: unset;
  width: 86px;
  height: 36px;
  background: #7785ff;
  border-radius: 3px;
  color: #ffffff;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;
const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export default function Scroll({ tabs }) {
  const [checkList, setCheckList] = useState([]);
  const [folder, setFolder] = useState([]);
  const [newFolderName, setNewFolderName] = useState('');

  const handleClick = (e) => {
    const { id, name, value, src, checked } = e.target;
    console.log(e.target);

    checked
      ? setCheckList((checkList) => [
          ...checkList,
          { tab: id, title: name, url: value, favIconUrl: src },
        ])
      : setCheckList((checkList) => checkList.filter((i) => i.tab !== id));
  };

  const changeInputNewFolder = (e) => {
    const { value } = e.target;
    setNewFolderName(value);
    console.log(`폴더 이름 ${value}`);
  };

  const submitList = (e) => {
    chrome.storage.sync.set({ key: checkList }, function () {
      console.log('checkList 저장');
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newFolderName === '') {
      alert('폴더 이름을 입력하세요');
    }
    if (checkList.length === 0) {
      alert('At least one should be checked');
      setNewFolderName('');
    } else {
      e.target.reset();
      setCheckList([]);
      alert('저장되었습니다.');

      setFolder((folder) => [
        ...folder,
        { folderName: newFolderName, folderInfo: checkList },
      ]);
      setNewFolderName('');
    }
  };

  const check = () => {
    console.log(checkList);
    console.log(folder);
  };

  return (
    <SubmitForm onSubmit={handleSubmit}>
      <List>
        {tabs.map(({ favIconUrl, title, url }, index) => (
          <ListRow key={index}>
            <CheckBox
              id={index}
              name={title}
              value={url}
              src={favIconUrl}
              onClick={handleClick}
              type="checkbox"
            />
            <CheckLabel htmlFor={index}></CheckLabel>
            <Image src={favIconUrl} />
            <Title> {title}</Title>
          </ListRow>
        ))}
      </List>
      <InputRow>
        <Font>폴더</Font>
        <Input
          type="text"
          value={newFolderName}
          onChange={changeInputNewFolder}
          placeholder="새 폴더의 이름을 입력하세요"
        ></Input>
      </InputRow>

      <InputRow>
        <Font>기존 폴더</Font>
        <Input type="text" placeholder="기존폴더이름" list="folderList" />
        <datalist id="folderList">
          <option value="컴퓨터공학과"></option>
          <option value="영어영문과"></option>
          <option value="경영학과"></option>
          <option value="사회체육과"></option>
        </datalist>
      </InputRow>

      <ButtonRow>
        <CompleteButton onClick={submitList}>완료</CompleteButton>
      </ButtonRow>

      <button type="button" onClick={check}>
        check
      </button>
    </SubmitForm>
  );
}
