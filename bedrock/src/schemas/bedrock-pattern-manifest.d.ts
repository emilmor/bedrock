interface BedrockPatternManifest {
  config: BedrockPatternManifestConfig;
  getPattern: (id: string) => PatternSchema;
  getPatterns: () => PatternSchema[];
  setPatternMeta: (id: string, meta: PatternMetaSchema) => Promise<GenericResponse>;
  getPatternMeta: (id: string) => PatternMetaSchema;
  createPatternFiles: (config: { id: string }) => Promise<GenericResponse>;
}

interface BedrockPatternManifestConfig {
  patternPaths: string[];
  newPatternDir: string;
  dataDir: string;
}
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file: src/schemas/pattern.schema.js,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Identifying machine friendly name of pattern. Usually the 'Block' in 'BEM'.
 */
type Id = string;
/**
 * Path (prefixed with namespace) of pattern template. Example '@components/_media-block.twig'.
 */
type CSSSelector = string;
/**
 * Denote if this form should be displayed inline
 */
type IsInline = boolean;
/**
 * Collections of template files and their schemas
 */
type PatternTemplatesSchema = {
  path: string;
  id: string;
  title: string;
  alias: string;
  selector?: CSSSelector;
  schema: Schema;
  uiSchema?: UiSchema;
  isInline?: IsInline;
}[];

interface PatternSchema {
  id: Id;
  /**
   * Relative path to a JSON file that stores meta data for pattern. Schema for that file is in "pattern-meta.schema.json".
   */
  metaFilePath: string;
  templates: PatternTemplatesSchema;
}
/**
 * Json Schema (v7) describing pattern
 */
interface Schema {
  [k: string]: any;
}
/**
 * UI for Json Schema (v7)
 */
interface UiSchema {
  [k: string]: any;
}

// ---------

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file: src/schemas/pattern-w-meta.schema.js,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Title or Name of the pattern.
 */
type Title = string;
type Description = string;
/**
 * Describes the type of pattern.
 */
type Type = 'component' | 'layout';
type Status = 'draft' | 'inProgress' | 'ready';
type Uses = ('inSlice' | 'inGrid' | 'inComponent')[];
/**
 * Set to false to show default placeholder thumbnail
 */
type HasIcon = boolean;
/**
 * Title for component do's and don'ts example
 */
type ExampleName = string;
/**
 * More details about the contrasting examples for this component.
 */
type ExampleDescription = string;
/**
 * Screenshot example of scenario
 */
type Image = string;
/**
 * Description of what they should or should not be doing. Will automatically be preceded by 'do' or 'don't'.
 */
type Caption = string;
/**
 * Boolean to denote if this example is a 'Do' or a 'Don't'.
 */
type DoOrDonT = boolean;
/**
 * Size at which to demo this component
 */
type DemoSize = 's' | 'm' | 'l' | 'full';

interface PatternWithMetaSchema {
  id: Id;
  /**
   * Relative path to a JSON file that stores meta data for pattern. Schema for that file is in "pattern-meta.schema.json".
   */
  metaFilePath: string;
  templates: PatternTemplatesSchema;
  meta?: PatternMetaSchema;
  readme?: string;
  dir: string;
}

/**
 * Meta data that describes a pattern (component, layout, etc) that comes from the Basalt Crux Design System.
 */
interface PatternMetaSchema {
  title: Title;
  description?: Description;
  type?: Type;
  status?: Status;
  uses?: Uses;
  hasIcon?: HasIcon;
  /**
   * Visual representations of what to do, and not to do, with components.
   */
  dosAndDonts?: {
    title?: ExampleName;
    description?: ExampleDescription;
    items?: {
      image: Image;
      caption?: Caption;
      do: DoOrDonT;
    };
    [k: string]: any;
  }[];
  demoSize?: DemoSize;
}

interface BedrockPatternType {
  id: string;
  title: string;
}

interface BedrockPattern {
  id: Id;
  /**
   * Relative path to a JSON file that stores meta data for pattern. Schema for that file is in "pattern-meta.schema.json".
   */
  metaFilePath: string;
  templates: BedrockPatternTemplate[];
  meta?: PatternMetaSchema;
  readme?: string;
  dir: string;
}

type BedrockPatternTemplate = {
  name: string;
  path: string;
  absolutePath: string;
  id: string;
  title: string;
  alias: string;
  selector?: CSSSelector;
  schema: Schema;
  uiSchema?: UiSchema;
  isInline?: IsInline;
  renderer: BedrockTemplateRenderer;
};
