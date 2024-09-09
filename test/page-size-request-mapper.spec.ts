import { faker } from "@faker-js/faker";
import { expect } from "chai";
import { NumberMapperInterface } from "inversify-number-mapper";
import sinon, { StubbedInstance, stubInterface } from "ts-sinon";
import { PageRequestDto } from "page-request-dto";
import { PageSizeRequestMapper } from "page-size-request-mapper";
import { PageSizeRequestMapperInterface } from "page-size-request-mapper-interface";

describe("PageSizeRequestMapper tests", () => {
  let numberMapperMock: StubbedInstance<NumberMapperInterface>;
  let mapper: PageSizeRequestMapperInterface;
  const defaultValue = 50;

  beforeEach(() => {
    numberMapperMock = stubInterface<NumberMapperInterface>();
    mapper = new PageSizeRequestMapper(numberMapperMock);
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should return default value when input is null", () => {
    const expected = faker.number.int();

    const pageSizeStub = numberMapperMock.mapper;

    pageSizeStub.returns(expected);

    const result = mapper.mapper(null);

    expect(result).to.be.not.eq(null);
    expect(result).is.equal(expected);

    expect(pageSizeStub.calledOnceWithExactly(undefined, defaultValue)).to.be.eq(true);
  });

  it("should return default value when input is undefined", () => {
    const expected = faker.number.int();

    const pageSizeStub = numberMapperMock.mapper;

    pageSizeStub.returns(expected);

    const result = mapper.mapper(undefined);

    expect(result).to.be.not.eq(null);
    expect(result).is.equal(expected);

    expect(pageSizeStub.calledOnceWithExactly(undefined, defaultValue)).to.be.eq(true);
  });

  it("should return default value when input is ok", () => {
    const input = faker.string.uuid();
    const expected = faker.number.int();
    const request = stubInterface<PageRequestDto>();

    const pageSizeStub = numberMapperMock.mapper;

    request["page-limit"] = input;
    pageSizeStub.returns(expected);

    const result = mapper.mapper(request);

    expect(result).to.be.not.eq(null);
    expect(result).is.equal(expected);

    expect(pageSizeStub.calledOnceWithExactly(input, defaultValue)).to.be.eq(true);
  });
});
