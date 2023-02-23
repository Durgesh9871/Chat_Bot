import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Text } from "@chakra-ui/react";
import "./styles.css"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);

  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }

  return (
    <>
     
      <SidebarNav isOpen={true}>
        <SidebarWrap>
          <NavIcon to="#">
             <Text>Dashboard</Text>
          </NavIcon>
          <SidebarLink> Home </SidebarLink>
          <SidebarLink>About</SidebarLink>
          <SidebarLink >Services</SidebarLink>
          
         

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
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background-color: #20A7DB;
   
    cursor: pointer;
  }
`;



