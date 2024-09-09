import { faker } from "@faker-js/faker";
import { expect } from "chai";
import sinon, { StubbedInstance, stubInterface } from "ts-sinon";
import { EnabledRequestMapperInterface } from "enabled-request-mapper-interface";
import { FilterByRequestMapperInterface } from "filter-by-request-mapper-interface";
import { FilterContentRequestMapperInterface } from "filter-content-request-mapper-interface";
import { OrderByRequestMapperInterface } from "order-by-request-mapper-interface";
import { OrderStyleRequestMapperInterface } from "order-style-request-mapper-interface";
import { PageNumberRequestMapperInterface } from "page-number-request-mapper-interface";
import { PageRequestDto } from "page-request-dto";
import { PageRequestMapper } from "page-request-mapper";
import { PageRequestMapperInterface } from "page-request-mapper-interface";
import { PageSizeRequestMapperInterface } from "page-size-request-mapper-interface";

describe("PageRequestMapper tests", () => {
  let pageSizeMapperMock: StubbedInstance<PageSizeRequestMapperInterface>;
  let pageNumberMapperMock: StubbedInstance<PageNumberRequestMapperInterface>;
  let orderByMapperMock: StubbedInstance<OrderByRequestMapperInterface>;
  let orderStyleMapperMock: StubbedInstance<OrderStyleRequestMapperInterface>;
  let filterByMapperMock: StubbedInstance<FilterByRequestMapperInterface>;
  let filterContentMapperMock: StubbedInstance<FilterContentRequestMapperInterface>;
  let enabledMapperMock: StubbedInstance<EnabledRequestMapperInterface>;

  let mapper: PageRequestMapperInterface;

  beforeEach(() => {
    pageSizeMapperMock = stubInterface<PageSizeRequestMapperInterface>();
    pageNumberMapperMock = stubInterface<PageNumberRequestMapperInterface>();
    orderByMapperMock = stubInterface<OrderByRequestMapperInterface>();
    orderStyleMapperMock = stubInterface<OrderStyleRequestMapperInterface>();
    filterByMapperMock = stubInterface<FilterByRequestMapperInterface>();
    filterContentMapperMock = stubInterface<FilterContentRequestMapperInterface>();
    enabledMapperMock = stubInterface<EnabledRequestMapperInterface>();
    mapper = new PageRequestMapper(
      pageSizeMapperMock,
      pageNumberMapperMock,
      orderByMapperMock,
      orderStyleMapperMock,
      filterByMapperMock,
      filterContentMapperMock,
      enabledMapperMock
    );
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should check keys", () => {
    const requestDtoMock = stubInterface<PageRequestDto>();

    const result = mapper.fromDtoToModel(requestDtoMock);

    expect(result).to.be.an("object");
    expect(result).to.has.keys(["pageSize", "pageNumber", "orderBy", "orderStyle", "filterBy", "filterContent", "enabled"]);
  });

  it("should check page size", () => {
    const pageSizeValue = faker.number.int();

    const requestDtoMock = stubInterface<PageRequestDto>();

    const pageSizeStub = pageSizeMapperMock.mapper;
    pageSizeStub.returns(pageSizeValue);

    const result = mapper.fromDtoToModel(requestDtoMock);

    expect(result).to.be.an("object");
    expect(result).to.has.property("pageSize").is.equal(pageSizeValue);
    expect(pageSizeStub.calledOnceWithExactly(requestDtoMock)).to.be.eq(true);
  });

  it("should check page number", () => {
    const pageNumberValue = faker.number.int();

    const requestDtoMock = stubInterface<PageRequestDto>();

    const pageNumberStub = pageNumberMapperMock.mapper;
    pageNumberStub.returns(pageNumberValue);

    const result = mapper.fromDtoToModel(requestDtoMock);

    expect(result).to.be.an("object");
    expect(result).to.has.property("pageNumber").is.equal(pageNumberValue);
    expect(pageNumberStub.calledOnceWithExactly(requestDtoMock)).to.be.eq(true);
  });

  it("should check order by", () => {
    const orderByValue = faker.string.uuid();

    const requestDtoMock = stubInterface<PageRequestDto>();

    const orderByStub = orderByMapperMock.mapper;
    orderByStub.returns(orderByValue);

    const result = mapper.fromDtoToModel(requestDtoMock);

    expect(result).to.be.an("object");
    expect(result).to.has.property("orderBy").is.equal(orderByValue);
    expect(orderByStub.calledOnceWithExactly(requestDtoMock)).to.be.eq(true);
  });

  it("should check order style", () => {
    const orderStyleValue = faker.string.uuid();

    const requestDtoMock = stubInterface<PageRequestDto>();

    const orderStyleStub = orderStyleMapperMock.mapper;
    orderStyleStub.returns(orderStyleValue);

    const result = mapper.fromDtoToModel(requestDtoMock);

    expect(result).to.be.an("object");
    expect(result).to.has.property("orderStyle").is.equal(orderStyleValue);
    expect(orderStyleStub.calledOnceWithExactly(requestDtoMock)).to.be.eq(true);
  });

  it("should check filter by", () => {
    const filterByValue = faker.string.uuid();

    const requestDtoMock = stubInterface<PageRequestDto>();

    const filterByStub = filterByMapperMock.mapper;
    filterByStub.returns(filterByValue);

    const result = mapper.fromDtoToModel(requestDtoMock);

    expect(result).to.be.an("object");
    expect(result).to.has.property("filterBy").is.equal(filterByValue);
    expect(filterByStub.calledOnceWithExactly(requestDtoMock)).to.be.eq(true);
  });

  it("should check filter content", () => {
    const filterContentValue = faker.string.uuid();

    const requestDtoMock = stubInterface<PageRequestDto>();

    const filterContentStub = filterContentMapperMock.mapper;
    filterContentStub.returns(filterContentValue);

    const result = mapper.fromDtoToModel(requestDtoMock);

    expect(result).to.be.an("object");
    expect(result).to.has.property("filterContent").is.equal(filterContentValue);
    expect(filterContentStub.calledOnceWithExactly(requestDtoMock)).to.be.eq(true);
  });

  it("should check enabled true", () => {
    const enabledValue = true;

    const requestDtoMock = stubInterface<PageRequestDto>();

    const enabledStub = enabledMapperMock.mapper;
    enabledStub.returns(enabledValue);

    const result = mapper.fromDtoToModel(requestDtoMock);

    expect(result).to.be.an("object");
    expect(result).to.has.property("enabled").is.equal(enabledValue);
    expect(enabledStub.calledOnceWithExactly(requestDtoMock)).to.be.eq(true);
  });

  it("should check enabled false", () => {
    const enabledValue = false;

    const requestDtoMock = stubInterface<PageRequestDto>();

    const enabledStub = enabledMapperMock.mapper;
    enabledStub.returns(enabledValue);

    const result = mapper.fromDtoToModel(requestDtoMock);

    expect(result).to.be.an("object");
    expect(result).to.has.property("enabled").is.equal(enabledValue);
    expect(enabledStub.calledOnceWithExactly(requestDtoMock)).to.be.eq(true);
  });
});
