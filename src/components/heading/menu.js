import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';


export const Menu = styled.header`
  background-color: rgb(51, 51, 77);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 24px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  white-space: nowrap;
`

export const NavLink = styled(Link)`
  color: rgb(255,255,255);
  text-decoration: none;
  font-size: 24px;
  line-height: 29px;
  font-weight:600;
  margin-right: 50px;
  transition: color 0.3s;
  &.active{
    color: rgb(128, 179, 255);
  }
  &:hover,&:active{
    color: rgb(128, 179, 255);
  }
  &:last-child{
    margin-right:0;
  }
`