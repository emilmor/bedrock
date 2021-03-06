import styled from 'styled-components';

export const TextInputWrapper = styled.div`
  > input,
  > textarea {
    box-sizing: border-box;
    padding: ${props => props.theme.inputs.padding};
    border: ${props => props.theme.inputs.border};
    background-color: white;
    font-size: ${props => props.theme.inputs.fontSize};
    width: 100%;
  }
  > textarea {
    padding: ${props => props.theme.globals.spacing.s};
  }
  > input {
    height: ${props => props.theme.inputs.height};
  }
`;

export const RadioInputWrapper = styled.div`
  .field-radio-group.field-radio-group {
    min-height: ${props => props.theme.inputs.height};
    height: unset;
  }
  input {
    margin-right: 8px;
    + span {
      font-size: ${props => props.theme.inputs.fontSize};
    }
  }
`;

export const CheckboxInputWrapper = styled.div`
  p {
    display: none;
  }
  label {
    height: ${props => props.theme.inputs.height};
    display: flex;
    align-items: center;
  }
  input {
    margin-right: 8px;
    + span {
      font-size: ${props => props.theme.inputs.fontSize};
    }
  }
`;

export const FormIconButton = styled.div`
  display: inline-block;
  width: 21px;
  height: 21px;
  background-size: contain;
  position: relative;
  cursor: ${props => (props.active ? 'pointer' : 'auto')};
  &::after {
    background: ${props =>
      props.backgroundImage ? props.backgroundImage : ''};
    background-size: contain;
    opacity: ${props => (props.active ? 1 : 0.25)};
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 1;
  }
`;

export const FormIconTray = styled.div`
  box-sizing: border-box;
  border: ${props => props.theme.globals.borders.border};
  display: inline-flex;
  padding: 5px 8px;
`;

export const FormArrayItem = styled.div`
  padding: 0.25rem;
  &:last-child {
    margin-bottom: 0;
  }
  &:nth-child(odd) {
    background-color: ${props => props.theme.globals.colors.neutralXLight};
  }
  .field {
    padding-right: 0.25rem;
    > div.custom-object {
      display: flex;
      justify-content: left;
      flex-wrap: wrap;
      > div.custom-object-item {
        padding: 0;
        flex-grow: 1;
        + .custom-object-item {
          width: 100%;
        }
      }
    }
  }
  & > * + * {
    /* margin-left: 0.25rem; */
  }
  &:not(:last-child) {
    padding-bottom: 0.75rem;
    border-bottom: 1px solid lightgrey;
  }
`;

export const Toggle = styled.div`
  p {
    display: none;
  }

  input[type='checkbox'] {
    height: 0;
    width: 0;
    visibility: hidden;
    display: none;
  }

  .checkbox-label {
    margin-left: 0.25rem;
  }

  .checkbox-toggler {
    align-items: center;
    cursor: pointer;
    text-indent: -9999px;
    width: 50px;
    height: 25px;
    background: ${props => props.theme.globals.colors.neutralLight};
    display: inline-block;
    border-radius: 50px;
    position: relative;
  }

  .checkbox-toggler:after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 15px;
    height: 15px;
    background: #fff;
    border-radius: 22px;
    transition: 0.3s;
  }

  input:checked + .checkbox-toggler {
    background: ${props => props.theme.globals.colors.active};
  }

  input:checked + .checkbox-toggler:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }

  label:active:after {
    width: 32px;
  }
`;
