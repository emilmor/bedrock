import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const SelectStyledWrapper = styled.label`
  display: inline-block;
  overflow: hidden;
  padding-right: 3px;
  > .label-text {
    display: inline-block;
    margin-right: 5px;
    &:after {
      content: ':';
    }
  }
  /* stylelint-disable property-no-vendor-prefix */
  span {
    display: inline-block;
    max-width: 100%;
    position: relative;
    height: ${props => props.theme.selects.height};
    background-color: ${props => props.theme.selects.background};
    margin: ${props => props.theme.selects.margin};
    /* ::after produces the custom dropdown arrow next to text */
    &::after {
      content: '';
      display: block;
      position: absolute;
      pointer-events: none; /* Arrow clickable in some browsers */
      border: 1px solid transparent; /* reset all borders */
      width: 0;
      height: 0;
      right: 10px;
      border-width: 8px 6.5px 0 6.5px;
      border-top-color: gray;
      top: 41%;
    }
    select {
      cursor: pointer;
      width: 100%;
      background-color: ${props => props.theme.selects.background};
      font-size: ${props => props.theme.selects.fontSize};
      border: ${props => props.theme.selects.border};
      border-radius: ${props => props.theme.selects.borderRadius};
      display: inline-block;
      height: 100%;
      margin: auto 0;
      padding: 0.3rem 2rem 0.3rem 1rem;
      -webkit-appearance: none;
      -moz-appearance: none;
      outline: none;
    }
  }
  /* stylelint-enable property-no-vendor-prefix */
`;

export class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: this.props.items[props.initialItem].value,
    };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event) {
    this.setState({
      currentValue: event.target.value,
    });
    this.props.handleChange(event.target.value);
  }

  render() {
    let { currentValue } = this.state;
    /* eslint-disable react/prop-types */
    if (this.props.value) {
      currentValue = this.props.value;
    }
    /* eslint-enable react/prop-types */
    return (
      <SelectStyledWrapper tabIndex="0">
        {this.props.label && (
          <div className="label-text">{this.props.label}</div>
        )}
        <span>
          <select onChange={this.handleSelection} value={currentValue}>
            {this.props.items.map(item => (
              <option tabIndex={0} value={item.value} key={item.value}>
                {item.title ? item.title : item.value}
              </option>
            ))}
          </select>
        </span>
      </SelectStyledWrapper>
    );
  }
}

Select.defaultProps = {
  initialItem: 0,
  label: '',
};

Select.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
  initialItem: PropTypes.number,
  label: PropTypes.string,
};
