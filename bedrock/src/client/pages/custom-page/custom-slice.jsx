import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Button } from '@basalt/bedrock-atoms';
import SchemaForm from '@basalt/bedrock-schema-form';
import bedrockSlices from './slices';

class CustomSlice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: '',
      renderKey: shortid.generate(),
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error({ error, errorInfo });
    this.setState({
      hasError: true,
      errorMessage: error.message,
    });
  }

  render() {
    const {
      slice,
      sliceIndex,
      isEditing,
      slicesLength,
      moveSliceDown,
      moveSliceUp,
      deleteSlice,
      setSliceData,
    } = this.props;

    let Slice = () => <p>no slice...</p>;
    const BedrockSlice = bedrockSlices.find(b => b.id === slice.blockId);
    if (BedrockSlice) {
      Slice = BedrockSlice.render;
    }
    return (
      <div
        style={{
          width: '100%',
          border: isEditing ? 'dotted 1px hsl(0, 0%, 45%)' : 'none',
          marginBottom: '.5rem',
          padding: '3px',
        }}
      >
        {isEditing && (
          <div>
            <h4>{BedrockSlice.title}</h4>
            <p>{BedrockSlice.description}</p>
            <Button
              disabled={sliceIndex === 0}
              onClick={() => moveSliceUp(sliceIndex)}
              style={{ marginRight: '.5rem' }}
            >
              Move Up
            </Button>
            <Button
              disabled={sliceIndex + 1 === slicesLength}
              onClick={() => moveSliceDown(sliceIndex)}
              style={{ marginRight: '.5rem' }}
            >
              Move Down
            </Button>
            <Button
              onClick={() => deleteSlice(slice.id)}
              style={{ marginRight: '.5rem' }}
            >
              Delete Slice
            </Button>
            {BedrockSlice.schema && (
              <SchemaForm
                schema={BedrockSlice.schema}
                uiSchema={BedrockSlice.uiSchema || {}}
                formData={slice.data}
                onChange={({ formData }) => {
                  setSliceData(sliceIndex, formData);
                  if (this.state.hasError) {
                    this.setState({
                      renderKey: shortid.generate(),
                      hasError: false,
                      errorMessage: '',
                    });
                  }
                }}
              />
            )}
            <hr />
          </div>
        )}

        {this.state.hasError && (
          <>
            <h3>Error in component, please try changing data</h3>
            <p>{this.state.errorMessage}</p>
          </>
        )}

        {!this.state.hasError && (
          <Slice
            data={slice.data}
            key={this.state.renderKey}
            setSliceData={data => setSliceData(sliceIndex, data)}
            isEditing={isEditing}
          />
        )}
      </div>
    );
  }
}

CustomSlice.defaultProps = {};

CustomSlice.propTypes = {
  slice: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired,
    schema: PropTypes.object,
    uiSchema: PropTypes.object,
    initialData: PropTypes.object,
  }).isRequired,
  sliceIndex: PropTypes.number.isRequired,
  isEditing: PropTypes.bool.isRequired,
  slicesLength: PropTypes.number.isRequired,
  moveSliceDown: PropTypes.func.isRequired,
  moveSliceUp: PropTypes.func.isRequired,
  deleteSlice: PropTypes.func.isRequired,
  setSliceData: PropTypes.func.isRequired,
};

export default CustomSlice;
