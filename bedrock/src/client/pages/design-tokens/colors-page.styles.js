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

export const ColorsDemoBox = styled.div`
  display: inline-block;
  min-height: 135px;
  margin: 0 2.5rem 2.5rem 0;
  position: relative;
  width: 325px;
  vertical-align: top;
  padding: 0.7rem;
`;

export const TextColorDemo = styled.div`
  display: inline-block;
  margin: 0 2.5rem 2rem 0;
  position: relative;
  width: 325px;
  vertical-align: top;
  padding: 0.7rem;
  * {
    color: ${props => props.color};
  }
`;

export const HrDemoWrapper = styled.div`
  margin-bottom: 3rem;
  p {
    margin: 0;
    display: block;
    clear: left;
  }
  hr {
    float: left;
  }
`;

export const HrDemo = styled.hr`
  display: block;
  width: 300px;
  color: ${props => props.color};
`;
