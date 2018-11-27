module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  title: 'Pattern Meta Schema',
  type: 'object',
  description:
    'Meta data that describes a pattern (component, layout, etc) that comes from the Basalt Crux Design System.',
  additionalProperties: false,
  required: ['title'],
  properties: {
    title: {
      title: 'Title',
      type: 'string',
      description: 'Title or Name of the pattern.',
    },
    description: {
      title: 'Description',
      type: 'string',
    },
    type: {
      title: 'Type',
      type: 'string',
      description: 'Describes the type of pattern.',
      enum: ['component', 'layout'],
      enumNames: ['Component', 'Layout'],
    },
    status: {
      title: 'Status',
      type: 'string',
      enum: ['draft', 'inProgress', 'ready'],
      enumNames: ['Draft', 'In Progress', 'Ready'],
      default: 'ready',
    },
    uses: {
      title: 'Uses',
      type: 'array',
      uniqueItems: true,
      default: [],
      items: {
        type: 'string',
        enum: ['inSlice', 'inGrid', 'inComponent'],
        enumNames: ['In Slice', 'In Grid', 'In Component'],
      },
    },
    hasIcon: {
      title: 'Has Icon',
      type: 'boolean',
      description: 'Set to false to show default placeholder thumbnail',
      default: true,
    },
    // dosAndDonts: {
    //   type: 'array',
    //   description:
    //     'Visual representations of what to do, and not to do, with components.',
    //   items: {
    //     type: 'object',
    //     additionalItems: false,
    //     properties: {
    //       title: {
    //         title: 'Example Name',
    //         type: 'string',
    //         description: "Title for component do's and don'ts example",
    //       },
    //       description: {
    //         title: 'Example Description',
    //         type: 'string',
    //         description:
    //           'More details about the contrasting examples for this component.',
    //       },
    //       items: {
    //         type: 'object',
    //         additionalProperties: false,
    //         required: ['image', 'do'],
    //         properties: {
    //           image: {
    //             title: 'Image',
    //             type: 'string',
    //             description: 'Screenshot example of scenario',
    //           },
    //           caption: {
    //             title: 'Caption',
    //             type: 'string',
    //             description:
    //               "Description of what they should or should not be doing. Will automatically be preceded by 'do' or 'don't'.",
    //           },
    //           do: {
    //             title: "Do or Don't",
    //             type: 'boolean',
    //             description:
    //               "Boolean to denote if this example is a 'Do' or a 'Don't'.",
    //           },
    //         },
    //       },
    //     },
    //   },
    // },
    demoSize: {
      title: 'Demo Size',
      type: 'string',
      description: 'Size at which to demo this component',
      enum: ['s', 'm', 'l', 'full'],
      enumNames: ['Small', 'Medium', 'Large', 'full'],
    },
  },
};
