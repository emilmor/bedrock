/**
 *  Copyright (C) 2018 Basalt
    This file is part of Bedrock.
    Bedrock is free software; you can redistribute it and/or modify it
    under the terms of the GNU General Public License as published by the Free
    Software Foundation; either version 2 of the License, or (at your option)
    any later version.

    Bedrock is distributed in the hope that it will be useful, but WITHOUT
    ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
    FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for
    more details.

    You should have received a copy of the GNU General Public License along
    with Bedrock; if not, see <https://www.gnu.org/licenses>.
 */
import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';

export const PageLayoutWithSidebar = styled.div`
  display: grid;
  grid-template-rows: 86px 1fr 112px;
  @media (max-width: 649px) {
    grid-template-rows: 86px 1fr 178px;
  }
  ${props =>
    props.sidebarCollapsed === 'true'
      ? 'grid-template-columns: 45px 1fr'
      : 'grid-template-columns: 300px 1fr'};
  height: 100vh;
  grid-template-areas:
    'header header'
    'sidebar main'
    'footer footer';
  transition: all ease 0.3s;
  > :first-child {
    grid-area: header;
  }
  > :nth-child(2) {
    grid-area: sidebar;
  }
  > :nth-child(3) {
    grid-area: main;
    padding: 2rem;
  }
  > :nth-child(4) {
    grid-area: footer;
  }
`;

export const SidebarStyled = styled.aside`
  position: relative;
  display: flex;
  flex-direction: row;
  h4:not(:first-child) {
    white-space: nowrap;
    margin: 1.25rem 0 0;
  }
  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
  .field-array {
    .field-array.form-group {
      margin-left: 0;
    }
  }
`;

export const SidebarColumn = styled.div`
  position: relative;
  width: calc(100% - 19px);
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.sidebar.background};
  padding: ${props => (props.sidebarCollapsed === 'true' ? '0' : '2rem')};
  transition: left ease 0.6s;
  > * {
    opacity: ${props => (props.sidebarCollapsed === 'true' ? '0' : '1')};
  }
`;

export const SidebarTrayHandle = styled.div`
  background-color: white;
  box-sizing: border-box;
  height: 100%;
  border-left: 1px solid lightgray;
  transition: all 0.3s;
  &:hover {
    border-left: solid 1px ${props => props.theme.sidebar.accentColor};
    color: ${props => props.theme.sidebar.accentColor};
    cursor: pointer;
  }
`;

export const ToggleChevron = styled(FaChevronLeft)`
  margin-top: 50vh;
  ${props =>
    props.sidebarcollapsed === 'true' ? `transform: rotate(180deg);` : ``};
`;
