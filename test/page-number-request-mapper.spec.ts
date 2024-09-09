import { faker } from "@faker-js/faker";
import { expect } from "chai";
import { NumberMapperInterface } from "inversify-number-mapper";
import sinon, { StubbedInstance, stubInterface } from "ts-sinon";
import { PageNumberRequestMapper } from "page-number-request-mapper";
import { PageNumberRequestMapperInterface } from "page-number-request-mapper-interface";
import { PageRequestDto } from "page-request-dto";

describe("PageNumberRequestMapper tests", () => {
  let numberMapperMock: StubbedInstance<NumberMapperInterface>;
  let mapper: PageNumberRequestMapperInterface;
  const defaultValue = 1;

  beforeEach(() => {
    numberMapperMock = stubInterface<NumberMapperInterface>();
    mapper = new PageNumberRequestMapper(numberMapperMock);
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should return default value when input is null", () => {
    const expected = faker.number.int();

    const pageNumberStub = numberMapperMock.mapper;

    pageNumberStub.returns(expected);

    const result = mapper.mapper(null);

    expect(result).to.be.not.eq(null);
    expect(result).is.equal(expected);

    expect(pageNumberStub.calledOnceWithExactly(undefined, defaultValue)).to.be.eq(true);
  });

  it("should return default value when input is undefined", () => {
    const expected = faker.number.int();

    const pageNumberStub = numberMapperMock.mapper;

    pageNumberStub.returns(expected);

    const result = mapper.mapper(undefined);

    expect(result).to.be.not.eq(null);
    expect(result).is.equal(expected);

    expect(pageNumberStub.calledOnceWithExactly(undefined, defaultValue)).to.be.eq(true);
  });

  it("should return default value when input is ok", () => {
    const input = faker.string.uuid();
    const expected = faker.number.int();
    const request = stubInterface<PageRequestDto>();

    const pageNumberStub = numberMapperMock.mapper;

    request["page-number"] = input;
    pageNumberStub.returns(expected);

    const result = mapper.mapper(request);

    expect(result).to.be.not.eq(null);
    expect(result).is.equal(expected);

    expect(pageNumberStub.calledOnceWithExactly(input, defaultValue)).to.be.eq(true);
  });
});
