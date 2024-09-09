# inversify-page-request

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
