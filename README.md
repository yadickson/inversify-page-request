# inversify-page-request

[![version](https://img.shields.io/github/package-json/v/yadickson/inversify-page-request?style=flat-square)](https://www.npmjs.com/package/inversify-page-request)
![license](https://img.shields.io/github/license/yadickson/inversify-page-request?style=flat-square)
[![build](https://img.shields.io/github/actions/workflow/status/yadickson/inversify-page-request/npm-build.yml?branch=main&style=flat-square)](https://github.com/yadickson/inversify-page-request/actions/workflows/npm-build.yml)
![tests](https://img.shields.io/endpoint?style=flat-square&url=https%3A%2F%2Fgist.githubusercontent.com%2Fyadickson%2F2edc636fc2ff6aff4b056d455f3290be%2Fraw%2Finversify-page-request-junit-tests.json)
![coverage](https://img.shields.io/endpoint?style=flat-square&url=https%3A%2F%2Fgist.githubusercontent.com%2Fyadickson%2F2edc636fc2ff6aff4b056d455f3290be%2Fraw%2Finversify-page-request-cobertura-coverage.json)

inversify page request utility

## install dependencies

```bash
npm install
```

## build

```bash
npm run build
```

## test

```bash
npm test
```

## test with coverage report

```bash
npm run test:coverage
```

## mutation test

```bash
npm run test:mutation
```

## format

```bash
npm run format
```

## Install into project

```bash
npm install inversify-page-request
```

## How to use

Load the module.

```javascript
...
import { PageRequestModule } from "inversify-page-request";
...

export const container = (): Container => {
  const container = new Container();
  container.load(new PageRequestModule());
  return container;
};
```

Inject the interface by type.

```javascript
...
import { PAGE_REQUEST_TYPE, PageRequestMapperInterface } from "inversify-page-request";
...

  @inject(PAGE_REQUEST_TYPE.PageRequestMapper)
  private readonly pageRequestMapper: PageRequestMapperInterface
```

Use the mapper.

```javascript

...
  const requestModel = pageRequestMapper.mapper(requestDto);
...

```
