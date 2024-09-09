import { faker } from "@faker-js/faker";
import { expect } from "chai";
import { StringMapperInterface } from "inversify-string-mapper";
import sinon, { StubbedInstance, stubInterface } from "ts-sinon";
import { FilterByRequestMapper } from "filter-by-request-mapper";
import { FilterByRequestMapperInterface } from "filter-by-request-mapper-interface";
import { PageRequestDto } from "page-request-dto";

describe("FilterByRequestMapper tests", () => {
  let stringMapperMock: StubbedInstance<StringMapperInterface>;
  let mapper: FilterByRequestMapperInterface;
  const defaultValue: string = undefined;

  beforeEach(() => {
    stringMapperMock = stubInterface<StringMapperInterface>();
    mapper = new FilterByRequestMapper(stringMapperMock);
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should return default value when input is null", () => {
    const expected = faker.string.uuid();

    const filterByStub = stringMapperMock.mapper;

    filterByStub.returns(expected);

    const result = mapper.mapper(null);

    expect(result).to.be.not.eq(null);
    expect(result).is.equal(expected);

    expect(filterByStub.calledOnceWithExactly(undefined, defaultValue)).to.be.eq(true);
  });

  it("should return default value when input is undefined", () => {
    const expected = faker.string.uuid();

    const filterByStub = stringMapperMock.mapper;

    filterByStub.returns(expected);

    const result = mapper.mapper(undefined);

    expect(result).to.be.not.eq(null);
    expect(result).is.equal(expected);

    expect(filterByStub.calledOnceWithExactly(undefined, defaultValue)).to.be.eq(true);
  });

  it("should return default value when input is ok", () => {
    const input = faker.string.uuid();
    const expected = faker.string.uuid();
    const request = stubInterface<PageRequestDto>();

    const filterByStub = stringMapperMock.mapper;

    request["filter-by"] = input;
    filterByStub.returns(expected);

    const result = mapper.mapper(request);

    expect(result).to.be.not.eq(null);
    expect(result).is.equal(expected);

    expect(filterByStub.calledOnceWithExactly(input, defaultValue)).to.be.eq(true);
  });
});
