import { faker } from "@faker-js/faker";
import { expect } from "chai";
import { StringMapperInterface } from "inversify-string-mapper";
import sinon, { StubbedInstance, stubInterface } from "ts-sinon";
import { OrderStyleRequestMapper } from "order-style-request-mapper";
import { OrderStyleRequestMapperInterface } from "order-style-request-mapper-interface";
import { PageRequestDto } from "page-request-dto";

describe("OrderStyleRequestMapper tests", () => {
  let stringMapperMock: StubbedInstance<StringMapperInterface>;
  let mapper: OrderStyleRequestMapperInterface;

  const key = "order-style";
  const ascExpected = "asc";
  const defaultValue = "asc";

  beforeEach(() => {
    stringMapperMock = stubInterface<StringMapperInterface>();
    mapper = new OrderStyleRequestMapper(stringMapperMock);
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should return default value when input is null", () => {
    const inputProcessed = faker.string.uuid();

    const orderStyleStub = stringMapperMock.mapper;

    orderStyleStub.returns(inputProcessed);

    const result = mapper.mapper(null);

    expect(result).to.be.not.eq(null);
    expect(result).is.equal(ascExpected);

    expect(orderStyleStub.calledOnceWithExactly(undefined, defaultValue)).to.be.eq(true);
  });

  it("should return default value when input is undefined", () => {
    const inputProcessed = faker.string.uuid();

    const orderStyleStub = stringMapperMock.mapper;

    orderStyleStub.returns(inputProcessed);

    const result = mapper.mapper(undefined);

    expect(result).to.be.not.eq(null);
    expect(result).is.equal(ascExpected);

    expect(orderStyleStub.calledOnceWithExactly(undefined, defaultValue)).to.be.eq(true);
  });

  it("should return default value when input is not ok, default asc", () => {
    const input = faker.string.uuid();
    const inputProcessed = faker.string.uuid();
    const request = stubInterface<PageRequestDto>();

    const orderStyleStub = stringMapperMock.mapper;

    request[`${key}`] = input;
    orderStyleStub.returns(inputProcessed);

    const result = mapper.mapper(request);

    expect(result).to.be.not.eq(null);
    expect(result).is.equal(ascExpected);

    expect(orderStyleStub.calledOnceWithExactly(input, defaultValue)).to.be.eq(true);
  });

  it("should return default value when input is asc", () => {
    const input = faker.string.uuid();
    const request = stubInterface<PageRequestDto>();

    const orderStyleStub = stringMapperMock.mapper;

    request[`${key}`] = input;
    orderStyleStub.returns(ascExpected);

    const result = mapper.mapper(request);

    expect(result).to.be.not.eq(null);
    expect(result).is.equal(ascExpected);

    expect(orderStyleStub.calledOnceWithExactly(input, defaultValue)).to.be.eq(true);
  });

  it("should return default value when input is desc", () => {
    const input = faker.string.uuid();
    const descExpected = "desc";
    const request = stubInterface<PageRequestDto>();

    const orderStyleStub = stringMapperMock.mapper;

    request[`${key}`] = input;
    orderStyleStub.returns(descExpected);

    const result = mapper.mapper(request);

    expect(result).to.be.not.eq(null);
    expect(result).is.equal(descExpected);

    expect(orderStyleStub.calledOnceWithExactly(input, defaultValue)).to.be.eq(true);
  });
});
