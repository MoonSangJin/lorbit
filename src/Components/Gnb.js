import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from './Logo';
import Profile from './Profile';
import defaultImage from '../assets/img/defaultImage';
import PopoverController from './Popover/PopoverController';
import ProfileMenu from '../Modules/Gnb/ProfileMenu';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserRequest } from '../Store/User/actions';
import { getAccessToken } from '../Utils/tokenHandler';


export default function Gnb() {
  const userReducer = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState(false);
  const [profileElementHolder, setProfileElementHolder] = useState(null);
  const ref = React.createRef();

  useEffect(() => {
    setProfileElementHolder(ref.current);
  }, [ref]);

  useEffect(() => {
    const autoSignIn = () => {
      if (!userReducer.user.isLoggedIn) {
        getAccessToken().then((res) => {
          if (res) {
            dispatch(fetchUserRequest());
          }
        });
      }
    };

    autoSignIn();
  }, [dispatch, userReducer.user.isLoggedIn]);

  const openDropdownMenu = () => {
    setIsOpenDropdownMenu(true);
  };

  const closeDropdownMenu = () => {
    setIsOpenDropdownMenu(false);
  };

  return (
    <>
      <Wrapper>
        <StyledLink to="/" style={{ all: 'unset' }}>
          <Logo />
        </StyledLink>

        {
          userReducer.user.isLoggedIn ?
            <PopoverController onClick={openDropdownMenu} ref={ref}>
              <Profile profileImageSrc={defaultImage} />
            </PopoverController>
            :
            <StyledLink to={'/sign-in/'}>
              <Profile profileImageSrc={defaultImage} />
            </StyledLink>
        }
      </Wrapper>
      <ProfileMenu
        isOpen={isOpenDropdownMenu}
        email={userReducer.user.email}
        closeHandler={closeDropdownMenu}
        anchorEl={profileElementHolder}
        profileImageSrc={defaultImage}
        isLoggedIn={userReducer.user.isLoggedIn}
      />
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  width: 100%;
  height: 54px;
  align-items: center;
`;

const StyledLink = styled(Link)`
  all: unset;
`;
