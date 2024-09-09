import { faker } from "@faker-js/faker";
import { expect } from "chai";
import { StringMapperInterface } from "inversify-string-mapper";
import sinon, { StubbedInstance, stubInterface } from "ts-sinon";
import { OrderByRequestMapper } from "order-by-request-mapper";
import { OrderByRequestMapperInterface } from "order-by-request-mapper-interface";
import { PageRequestDto } from "page-request-dto";

describe("OrderByRequestMapper tests", () => {
  let stringMapperMock: StubbedInstance<StringMapperInterface>;
  let mapper: OrderByRequestMapperInterface;
  const defaultValue: string = undefined;

  beforeEach(() => {
    stringMapperMock = stubInterface<StringMapperInterface>();
    mapper = new OrderByRequestMapper(stringMapperMock);
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should return default value when input is null", () => {
    const expected = faker.string.uuid();

    const orderByStub = stringMapperMock.mapper;

    orderByStub.returns(expected);

    const result = mapper.mapper(null);

    expect(result).to.be.not.eq(null);
    expect(result).is.equal(expected);

    expect(orderByStub.calledOnceWithExactly(undefined, defaultValue)).to.be.eq(true);
  });

  it("should return default value when input is undefined", () => {
    const expected = faker.string.uuid();

    const orderByStub = stringMapperMock.mapper;

    orderByStub.returns(expected);

    const result = mapper.mapper(undefined);

    expect(result).to.be.not.eq(null);
    expect(result).is.equal(expected);

    expect(orderByStub.calledOnceWithExactly(undefined, defaultValue)).to.be.eq(true);
  });

  it("should return default value when input is ok", () => {
    const input = faker.string.uuid();
    const expected = faker.string.uuid();
    const request = stubInterface<PageRequestDto>();

    const orderByStub = stringMapperMock.mapper;

    request["order-by"] = input;
    orderByStub.returns(expected);

    const result = mapper.mapper(request);

    expect(result).to.be.not.eq(null);
    expect(result).is.equal(expected);

    expect(orderByStub.calledOnceWithExactly(input, defaultValue)).to.be.eq(true);
  });
});
