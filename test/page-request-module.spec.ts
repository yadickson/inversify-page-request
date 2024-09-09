import { expect } from "chai";
import { Container } from "inversify";
import { BooleanMapperModule } from "inversify-boolean-mapper";
import { NumberMapperModule } from "inversify-number-mapper";
import { StringMapperModule } from "inversify-string-mapper";
import sinon from "ts-sinon";
import { EnabledRequestMapper } from "enabled-request-mapper";
import { FilterByRequestMapper } from "filter-by-request-mapper";
import { FilterContentRequestMapper } from "filter-content-request-mapper";
import {
  EnabledRequestMapperInterface,
  FilterByRequestMapperInterface,
  FilterContentRequestMapperInterface,
  OrderByRequestMapperInterface,
  OrderStyleRequestMapperInterface,
  PageNumberRequestMapperInterface,
  PageRequestMapperInterface,
  PageRequestModule,
  PageSizeRequestMapperInterface,
} from "index";
import { OrderByRequestMapper } from "order-by-request-mapper";
import { OrderStyleRequestMapper } from "order-style-request-mapper";
import { PageNumberRequestMapper } from "page-number-request-mapper";
import { PageRequestMapper } from "page-request-mapper";
import { PAGE_REQUEST_TYPE } from "page-request-type";
import { PageSizeRequestMapper } from "page-size-request-mapper";

describe("PageRequestModule tests", () => {
  let container: Container;

  beforeEach(() => {
    container = new Container();
    container.load(new StringMapperModule());
    container.load(new NumberMapperModule());
    container.load(new BooleanMapperModule());
    container.load(new PageRequestModule());
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should check bind PageRequestMapper", () => {
    expect(container.isBound(PAGE_REQUEST_TYPE.PageRequestMapper)).is.equal(true);
  });

  it("should check PageRequestMapperInterface", () => {
    const util = container.get<PageRequestMapperInterface>(PAGE_REQUEST_TYPE.PageRequestMapper);
    expect(util).instanceOf(PageRequestMapper);
  });

  it("should check bind PageSizeRequestMapper", () => {
    expect(container.isBound(PAGE_REQUEST_TYPE.PageSizeRequestMapper)).is.equal(true);
  });

  it("should check PageSizeRequestMapperInterface", () => {
    const util = container.get<PageSizeRequestMapperInterface>(PAGE_REQUEST_TYPE.PageSizeRequestMapper);
    expect(util).instanceOf(PageSizeRequestMapper);
  });

  it("should check bind PageNumberRequestMapper", () => {
    expect(container.isBound(PAGE_REQUEST_TYPE.PageNumberRequestMapper)).is.equal(true);
  });

  it("should check PageNumberRequestMapperInterface", () => {
    const util = container.get<PageNumberRequestMapperInterface>(PAGE_REQUEST_TYPE.PageNumberRequestMapper);
    expect(util).instanceOf(PageNumberRequestMapper);
  });

  it("should check bind OrderByRequestMapper", () => {
    expect(container.isBound(PAGE_REQUEST_TYPE.OrderByRequestMapper)).is.equal(true);
  });

  it("should check OrderByRequestMapperInterface", () => {
    const util = container.get<OrderByRequestMapperInterface>(PAGE_REQUEST_TYPE.OrderByRequestMapper);
    expect(util).instanceOf(OrderByRequestMapper);
  });

  it("should check bind OrderStyleRequestMapper", () => {
    expect(container.isBound(PAGE_REQUEST_TYPE.OrderStyleRequestMapper)).is.equal(true);
  });

  it("should check OrderStyleRequestMapperInterface", () => {
    const util = container.get<OrderStyleRequestMapperInterface>(PAGE_REQUEST_TYPE.OrderStyleRequestMapper);
    expect(util).instanceOf(OrderStyleRequestMapper);
  });

  it("should check bind FilterByRequestMapper", () => {
    expect(container.isBound(PAGE_REQUEST_TYPE.FilterByRequestMapper)).is.equal(true);
  });

  it("should check FilterByRequestMapperInterface", () => {
    const util = container.get<FilterByRequestMapperInterface>(PAGE_REQUEST_TYPE.FilterByRequestMapper);
    expect(util).instanceOf(FilterByRequestMapper);
  });

  it("should check bind FilterContentRequestMapper", () => {
    expect(container.isBound(PAGE_REQUEST_TYPE.FilterContentRequestMapper)).is.equal(true);
  });

  it("should check FilterContentRequestMapperInterface", () => {
    const util = container.get<FilterContentRequestMapperInterface>(PAGE_REQUEST_TYPE.FilterContentRequestMapper);
    expect(util).instanceOf(FilterContentRequestMapper);
  });

  it("should check bind EnabledRequestMapper", () => {
    expect(container.isBound(PAGE_REQUEST_TYPE.EnabledRequestMapper)).is.equal(true);
  });

  it("should check EnabledRequestMapperInterface", () => {
    const util = container.get<EnabledRequestMapperInterface>(PAGE_REQUEST_TYPE.EnabledRequestMapper);
    expect(util).instanceOf(EnabledRequestMapper);
  });
});
