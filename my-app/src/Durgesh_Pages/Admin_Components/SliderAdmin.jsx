import React, { useState } from "react";
import {AiFillHome, AiOutlineCaretDown} from "react-icons/ai";
import {FaUserAlt} from "react-icons/fa"
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Menu, MenuButton, MenuItem, MenuList, Text , Button  , Image} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons"
import "./styles.css"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);

  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }

  return (
    <>
       <Box background="#171923" height="10vh"  borderBottom="1px solid white" display="flex" justifyContent="flex-end" alignItems="center" padding="0px 100px" >
        <Menu >
  {({ isOpen }) => (
    <> 
    <Box display="flex" alignItems="center">
      <Image src="https://bit.ly/dan-abramov" width="35px" borderRadius="100%" border="2px solid white" />
      <MenuButton isActive={isOpen}  color="#fff" mr="2px" ml="10px" fontSize="20px">   Durgesh  </MenuButton>
      <AiOutlineCaretDown  color="#fff" fontSize="10px" style={{marginTop:"10px"}} />
      </Box>
      {/* <MenuList background="#171923" border="1px solid #fff" padding="10px">
        <MenuItem background="#171923"  color="#fff">Download</MenuItem>
        <MenuItem background="#171923"  color="#fff" >Create a Copy</MenuItem>
      </MenuList> */}
    </>
  )}
</Menu>
       </Box>
      <SidebarNav isOpen={true}>
        <SidebarWrap>
          <NavIcon >
             <Text>Dashboard</Text>
      
          </NavIcon>
          <SidebarLink> <AiFillHome style={{marginRight:"6px"}} /> Home </SidebarLink>
          <SidebarLink> <FaUserAlt style={{marginRight:"6px"}}  /> Customers</SidebarLink>
          
          
         

        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export {Sidebar}



const NavIcon = styled.div`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff ;
 
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
  border-right:2px solid white ; 
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
    background-color: #00bffe;
   
    cursor: pointer;
   
  }
`;



