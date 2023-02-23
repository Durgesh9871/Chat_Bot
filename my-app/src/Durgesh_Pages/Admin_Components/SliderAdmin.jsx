import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Text } from "@chakra-ui/react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
     
      <SidebarNav isOpen={true}>
        <SidebarWrap>
          <NavIcon to="#">
             <Text>Dashboard</Text>
          </NavIcon>
          <SidebarLink to="/">Home</SidebarLink>
          <SidebarLink to="/about">About</SidebarLink>
          <SidebarLink to="/services">Services</SidebarLink>
          <Dropdown>
            <DropdownBtn>
              Dropdown 
            </DropdownBtn>
            <DropdownContent>
              <SidebarLink >Dropdown Item 1</SidebarLink>
              <SidebarLink >Dropdown Item 2</SidebarLink>
              <SidebarLink >Dropdown Item 3</SidebarLink>
            </DropdownContent>
          </Dropdown>
          {/* <LoginLogoutBtn onClick={handleLogout}>Logout</LoginLogoutBtn> */}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export {Sidebar}



const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
`;

const SidebarNav = styled.nav`
  background: #171923;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const SidebarLink = styled.div`
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background-color: #04aa6d;
    border-left: 4px solid #fff;
    cursor: pointer;
  }
`;

const Dropdown = styled.div`
  display: block;
  position: relative;
  color: #fff;
`;

const DropdownBtn = styled.div`
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background-color: #04aa6d;
    border-left:`


  const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #171923;
  min-width: 160px;
  z-index: 1;
`;
