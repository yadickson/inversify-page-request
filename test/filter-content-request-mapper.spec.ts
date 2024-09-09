import { faker } from "@faker-js/faker";
import { expect } from "chai";
import { StringMapperInterface } from "inversify-string-mapper";
import sinon, { StubbedInstance, stubInterface } from "ts-sinon";
import { FilterContentRequestMapper } from "filter-content-request-mapper";
import { FilterContentRequestMapperInterface } from "filter-content-request-mapper-interface";
import { PageRequestDto } from "page-request-dto";

describe("FilterContentRequestMapper tests", () => {
  let stringMapperMock: StubbedInstance<StringMapperInterface>;
  let mapper: FilterContentRequestMapperInterface;
  const defaultValue: string = undefined;

  beforeEach(() => {
    stringMapperMock = stubInterface<StringMapperInterface>();
    mapper = new FilterContentRequestMapper(stringMapperMock);
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should return default value when input is null", () => {
    const expected = faker.string.uuid();

    const filterContentStub = stringMapperMock.mapper;

    filterContentStub.returns(expected);

    const result = mapper.mapper(null);

    expect(result).to.be.not.eq(null);
    expect(result).is.equal(expected);

    expect(filterContentStub.calledOnceWithExactly(undefined, defaultValue)).to.be.eq(true);
  });

  it("should return default value when input is undefined", () => {
    const expected = faker.string.uuid();

    const filterContentStub = stringMapperMock.mapper;

    filterContentStub.returns(expected);

    const result = mapper.mapper(undefined);

    expect(result).to.be.not.eq(null);
    expect(result).is.equal(expected);

    expect(filterContentStub.calledOnceWithExactly(undefined, defaultValue)).to.be.eq(true);
  });

  it("should return default value when input is ok", () => {
    const input = faker.string.uuid();
    const expected = faker.string.uuid();
    const request = stubInterface<PageRequestDto>();

    const filterContentStub = stringMapperMock.mapper;

    request["filter-content"] = input;
    filterContentStub.returns(expected);

    const result = mapper.mapper(request);

    expect(result).to.be.not.eq(null);
    expect(result).is.equal(expected);

    expect(filterContentStub.calledOnceWithExactly(input, defaultValue)).to.be.eq(true);
  });
});
