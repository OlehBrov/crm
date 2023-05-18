import styled from "styled-components";

export const DataBlock = styled.div`
  flex-grow: 1;
`;

export const DataContainer = styled.div`
  position: relative;
  display: flex;
  background-color: #fff;
  flex-direction: column;
  margin-left: 71px;
  margin-right: 95px;
  box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
  border-radius: 30px;
  padding: 30px;
`;
export const SelectStyled = styled.select`
  width: auto;
  padding: 5px;
  border: none;
  appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
`;

export const H4Styled = styled.h4`
  margin: 0;
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  /* identical to box height */

  letter-spacing: -0.01em;

  color: #000000;
`;

export const TableControlsWrap = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

export const DataFilter = styled.div`
  /* display: flex; */
`;

export const InputStyled = styled.input`
  height: 38px;
  width: 216px;
  margin-right: 0;
  margin-left: auto;
  align-self: flex-end;
  background: #F9FBFF;
border-radius: 10px;
border: none;
/* &::after{
    content: url('../images/search.svg');
    display: inline-block;
    width: 24px;
    height: 24px;
} */
`;
