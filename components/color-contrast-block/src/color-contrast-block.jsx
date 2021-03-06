import React from 'react';
import PropTypes from 'prop-types';
import { convertColor } from '@basalt/bedrock-utils';
import { Details, Select } from '@basalt/bedrock-atoms';
import Spinner from '@basalt/bedrock-spinner';
import {
  ColorContrastPlayground,
  AccessibilityInfo,
  AccessabilityDropdowns,
  AccessibilityResults,
  LargeText,
  Ratio,
  SmallText,
  ColorBlock,
  ColorCompare,
  ContrastWrapper,
  ContrastInner,
  Results,
  RowWrapper,
  Fade,
  NewRatio,
} from './color-contrast-block.styles';

class ColorContrastBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: 'white',
      textColor: 'black',
      isReady: false,
      contrast: {
        aa: '',
        aaa: '',
        aaaLarge: '',
        aaLarge: '',
        ratio: '',
      },
      allResults: {},
    };
    this.checkColorContrast = this.checkColorContrast.bind(this);
  }

  async componentDidMount() {
    this.checkColorContrast();
    const colors = this.props.bgColors;
    const { textColors } = this.props;
    const results = await Promise.all(
      colors.map(async bgColor => {
        const comparisonResults = await Promise.all(
          textColors
            .filter(comparedColor => comparedColor.value !== bgColor.value)
            .map(async comparedColor => ({
              comparedColor,
              contrast: await ColorContrastBlock.getColorContrast(
                bgColor.value,
                comparedColor.value,
              ),
            })),
        );
        return {
          bgColor,
          comparisonResults,
        };
      }),
    ).catch(error => console.error('Error in Promise.all', error));
    console.log('Promise.all done', { results });

    this.setState({
      allResults: results,
      isReady: true,
    });
  }

  static async getColorContrast(bg, text) {
    const bgValue = convertColor(bg, 'hex').slice(1);
    const txtValue = convertColor(text, 'hex').slice(1);

    const url = `https://webaim.org/resources/contrastchecker/?fcolor=${txtValue}&bcolor=${bgValue}&api`;
    const result = await window
      .fetch(url)
      .then(res => res.json())
      .catch(error => console.error(error));
    return result;
  }

  checkColorContrast() {
    const bgValue = convertColor(this.state.bgColor, 'hex').slice(1);
    const txtValue = convertColor(this.state.textColor, 'hex').slice(1);

    const url = `https://webaim.org/resources/contrastchecker/?fcolor=${txtValue}&bcolor=${bgValue}&api`;

    window
      .fetch(url)
      .then(res => res.json())
      .then(results => {
        this.setState({
          contrast: {
            aa: results.AA,
            aaa: results.AAA,
            aaaLarge: results.AAALarge,
            aaLarge: results.AALarge,
            ratio: results.ratio,
          },
        });
      });
  }

  render() {
    if (!this.state.isReady) {
      return <Spinner />;
    }
    const colorBlocks = this.state.allResults.map(result => (
      <Details key={result.bgColor.name}>
        <summary>{result.bgColor.name}</summary>
        <ContrastInner key={result.bgColor.name} testing="testing">
          <h3>{result.bgColor.name}</h3>
          <p className="col col--1">Variable</p>
          <p className="col col--2">Ratio</p>
          <p className="col col--3">AA</p>
          <p className="col col--4">AAA</p>
          <p className="col col--5">AA Large</p>
          <p className="col col--6">AAA Large</p>
          <ColorBlock color={result.bgColor.value} />
          <RowWrapper>
            {result.comparisonResults.map(compared => (
              <ColorCompare
                color={result.bgColor.value}
                key={compared.comparedColor.name}
                comparedColor={compared.comparedColor.value}
              >
                <Fade comparedColor={compared.comparedColor.value} />
                <p>{compared.comparedColor.name}</p>
                <NewRatio ratio={compared.contrast.ratio}>
                  {compared.contrast.ratio}
                </NewRatio>
                <Results pass={compared.contrast.AAA}>
                  {compared.contrast.AAA}
                </Results>
                <Results pass={compared.contrast.AA}>
                  {compared.contrast.AA}
                </Results>
                <Results pass={compared.contrast.AAALarge}>
                  {compared.contrast.AAALarge}
                </Results>
                <Results pass={compared.contrast.AALarge}>
                  {compared.contrast.AALarge}
                </Results>
              </ColorCompare>
            ))}
          </RowWrapper>
        </ContrastInner>
      </Details>
    ));
    /* eslint-disable jsx-a11y/label-has-for */
    return (
      <div>
        <ContrastWrapper>{colorBlocks}</ContrastWrapper>
        <br />
        <AccessabilityDropdowns>
          Background Color:
          {this.props.bgColors.length > 0 && (
            <Select
              value={this.state.bgColor}
              items={this.props.bgColors.map(color => ({
                value: color.value,
                key: color.name,
                title: color.name,
              }))}
              handleChange={value => {
                this.setState({ bgColor: value }, () =>
                  this.checkColorContrast(),
                );
              }}
            />
          )}
          Text Color:
          {this.props.textColors.length > 0 && (
            <Select
              value={this.state.textColor}
              items={this.props.textColors.map(color => ({
                value: color.value,
                key: color.name,
                title: color.name,
              }))}
              handleChange={value => {
                this.setState({ textColor: value }, () =>
                  this.checkColorContrast(),
                );
              }}
            />
          )}
        </AccessabilityDropdowns>
        <ColorContrastPlayground bgColor={this.state.bgColor}>
          <LargeText color={this.state.textColor}>
            Large Text looks like this
          </LargeText>
          <SmallText color={this.state.textColor}>
            small text looks like this
          </SmallText>
        </ColorContrastPlayground>
        <AccessibilityInfo>
          <p>
            WCAG AAA:{' '}
            <AccessibilityResults pass={this.state.contrast.aaa}>
              {this.state.contrast.aaa}
            </AccessibilityResults>
          </p>
          <p>
            WCAG AA:{' '}
            <AccessibilityResults pass={this.state.contrast.aa}>
              {this.state.contrast.aa}
            </AccessibilityResults>
          </p>
          <p>
            WCAG AAA (Large Text):{' '}
            <AccessibilityResults pass={this.state.contrast.aaaLarge}>
              {this.state.contrast.aaaLarge}
            </AccessibilityResults>
          </p>
          <p>
            WCAG AA (Large Text):{' '}
            <AccessibilityResults pass={this.state.contrast.aaLarge}>
              {this.state.contrast.aaLarge}
            </AccessibilityResults>
          </p>
          <p>
            WCAG Ratio:{' '}
            <Ratio ratio={this.state.contrast.ratio}>
              {this.state.contrast.ratio}
            </Ratio>
          </p>
        </AccessibilityInfo>
        <br />
        <Details>
          <summary>WCAG Details</summary>
          <p>
            <a href="https://www.w3.org/TR/WCAG20/" target="blank">
              WCAG 2.0
            </a>{' '}
            standards require a contrast ratio of greater than 4.5:1 for normal
            text and 3:1 for large text. For AAA standards, normal text ratio
            must be greater than 7:1 and large text ratio must be greater than
            4.5:1. Large text is defined as anything 14pt bold or higher.
          </p>
        </Details>
      </div>
    );
  }
}

ColorContrastBlock.defaultProps = {};

ColorContrastBlock.propTypes = {
  bgColors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
    }),
  ).isRequired,
  textColors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ColorContrastBlock;
