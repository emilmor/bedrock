import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pretty from 'pretty';
import TabbedPanel from '../bedrock/components/tabbed-panel';

class CodeBlock extends Component {
  constructor(props) {
    super(props);
  }

  // @todo Setup code highlighting
  componentDidMount() {}

  render() {
    const items = this.props.items.map(item => {
      let handleTyping = () => {};
      let isLive = false;
      if (item.handleTyping) {
        handleTyping = item.handleTyping;
        isLive = true;
      }

      return {
        title: item.name,
        id: item.language,
        children: (
          <pre className={`language-${item.language}`} style={{}}>
            <code
              onKeyUp={event => handleTyping(event.target.innerText)}
              contentEditable={isLive}
              role={'textbox'}
              tabIndex={0}
              style={{
                whiteSpace: 'pre',
                overflow: 'auto',
                maxWidth: '800px', // @todo remove this, fix bug that causes window to get huge on long lines
              }}
            >
              {item.language === 'html'
                ? pretty(item.code.trim(), { ocd: true })
                : item.code.trim()}
            </code>
          </pre>
        ),
      };
    });

    return <TabbedPanel items={items} />;
  }
}

CodeBlock.propTypes = {
  items: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    language: PropTypes.string,
    code: PropTypes.string.isRequired,
    handleTyping: PropTypes.func,
  }).isRequired,
};

export default CodeBlock;
