const { parseChangelog } = require('./github-util');

describe('github-utils', () => {
  test('parseChangelog', () => {
    const changelog = `
    

# [0.13.0](https://github.com/basaltinc/bedrock/compare/v0.12.4...v0.13.0) (2018-11-29)


### Features

* **bedrock:** implementing UI editable Design Token Groups ([#87](https://github.com/basaltinc/bedrock/issues/87)) ([6248d5f](https://github.com/basaltinc/bedrock/commit/6248d5f)), closes [#65](https://github.com/basaltinc/bedrock/issues/65)





## [0.12.4](https://github.com/basaltinc/bedrock/compare/v0.12.3...v0.12.4) (2018-11-29)


### Bug Fixes

* **bedrock:** parent brand link opens in new tab ([2e4fdf0](https://github.com/basaltinc/bedrock/commit/2e4fdf0))





## [0.12.3](https://github.com/basaltinc/bedrock/compare/v0.12.2...v0.12.3) (2018-11-29)

**Note:** Version bump only for package @basalt/bedrock-monorepo





## [0.12.2](https://github.com/basaltinc/bedrock/compare/v0.12.1...v0.12.2) (2018-11-28)


### Bug Fixes

* **bedrock:** fix playground controls toggle ([47c598a](https://github.com/basaltinc/bedrock/commit/47c598a)), closes [#25](https://github.com/basaltinc/bedrock/issues/25)

* **bedrock:** fix playground controls toggle ([47c598a](https://github.com/basaltinc/bedrock/commit/47c598a)), closes [#25](https://github.com/basaltinc/bedrock/issues/25)


### Performance Improvements

* **bedrock-atoms:** remove jittery tooltip animation ([fd5a5f1](https://github.com/basaltinc/bedrock/commit/fd5a5f1))

### Performance Improvements

* **bedrock:** parent brand link opens in new tab ([2e4fdf0](https://github.com/basaltinc/bedrock/commit/2e4fdf0))






## [0.12.1](https://github.com/basaltinc/bedrock/compare/v0.12.0...v0.12.1) (2018-11-28)


### Bug Fixes

* **bedrock:** update footer message ([884489f](https://github.com/basaltinc/bedrock/commit/884489f))
* **create-bedrock:** alter parentBrand url ([76cd4e7](https://github.com/basaltinc/bedrock/commit/76cd4e7))

    `;

    const expected = {
      issues: [87, 65, 25],
    };
    const actual = parseChangelog(changelog);
    expect(expected).toEqual(actual);
  });
});
