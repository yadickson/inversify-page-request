import { expect } from "chai";
import { PAGE_REQUEST_TYPE } from "page-request-type";

describe("PageRequestType tests", () => {
  it("should check PageRequestMapper value", () => {
    expect(PAGE_REQUEST_TYPE.PageRequestMapper).is.equal(Symbol.for("PAGE_REQUEST_TYPE -> PageRequestMapperInterface"));
  });

  it("should check PageSizeRequestMapper value", () => {
    expect(PAGE_REQUEST_TYPE.PageSizeRequestMapper).is.equal(Symbol.for("PAGE_REQUEST_TYPE -> PageSizeRequestMapperInterface"));
  });

  it("should check PageNumberRequestMapper value", () => {
    expect(PAGE_REQUEST_TYPE.PageNumberRequestMapper).is.equal(Symbol.for("PAGE_REQUEST_TYPE -> PageNumberRequestMapperInterface"));
  });

  it("should check OrderByRequestMapper value", () => {
    expect(PAGE_REQUEST_TYPE.OrderByRequestMapper).is.equal(Symbol.for("PAGE_REQUEST_TYPE -> OrderByRequestMapperInterface"));
  });

  it("should check OrderStyleRequestMapper value", () => {
    expect(PAGE_REQUEST_TYPE.OrderStyleRequestMapper).is.equal(Symbol.for("PAGE_REQUEST_TYPE -> OrderStyleRequestMapperInterface"));
  });

  it("should check FilterByRequestMapper value", () => {
    expect(PAGE_REQUEST_TYPE.FilterByRequestMapper).is.equal(Symbol.for("PAGE_REQUEST_TYPE -> FilterByRequestMapperInterface"));
  });

  it("should check FilterContentRequestMapper value", () => {
    expect(PAGE_REQUEST_TYPE.FilterContentRequestMapper).is.equal(Symbol.for("PAGE_REQUEST_TYPE -> FilterContentRequestMapperInterface"));
  });

  it("should check EnabledRequestMapper value", () => {
    expect(PAGE_REQUEST_TYPE.EnabledRequestMapper).is.equal(Symbol.for("PAGE_REQUEST_TYPE -> EnabledRequestMapperInterface"));
  });
});
