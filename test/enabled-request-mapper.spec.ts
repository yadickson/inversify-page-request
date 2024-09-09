import { faker } from "@faker-js/faker";
import { expect } from "chai";
import { BooleanMapperInterface } from "inversify-boolean-mapper";
import sinon, { StubbedInstance, stubInterface } from "ts-sinon";
import { EnabledRequestMapper } from "enabled-request-mapper";
import { EnabledRequestMapperInterface } from "enabled-request-mapper-interface";
import { PageRequestDto } from "page-request-dto";

describe("EnabledRequestMapper tests", () => {
  let booleanMapperMock: StubbedInstance<BooleanMapperInterface>;
  let mapper: EnabledRequestMapperInterface;
  const defaultValue: boolean = undefined;

  beforeEach(() => {
    booleanMapperMock = stubInterface<BooleanMapperInterface>();
    mapper = new EnabledRequestMapper(booleanMapperMock);
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should return true default value when input is null", () => {
    const expected = true;

    const enabledStub = booleanMapperMock.mapper;

    enabledStub.returns(expected);

    const result = mapper.mapper(null);

    expect(result).to.be.not.eq(null);
    expect(result).is.equal(expected);

    expect(enabledStub.calledOnceWithExactly(undefined, defaultValue)).to.be.eq(true);
  });

  it("should return false default value when input is null", () => {
    const expected = false;

    const enabledStub = booleanMapperMock.mapper;

    enabledStub.returns(expected);

    const result = mapper.mapper(null);

    expect(result).to.be.not.eq(null);
    expect(result).is.equal(expected);

    expect(enabledStub.calledOnceWithExactly(undefined, defaultValue)).to.be.eq(true);
  });

  it("should return true default value when input is undefined", () => {
    const expected = true;

    const enabledStub = booleanMapperMock.mapper;

    enabledStub.returns(expected);

    const result = mapper.mapper(undefined);

    expect(result).to.be.not.eq(null);
    expect(result).is.equal(expected);

    expect(enabledStub.calledOnceWithExactly(undefined, defaultValue)).to.be.eq(true);
  });

  it("should return false default value when input is undefined", () => {
    const expected = false;

    const enabledStub = booleanMapperMock.mapper;

    enabledStub.returns(expected);

    const result = mapper.mapper(undefined);

    expect(result).to.be.not.eq(null);
    expect(result).is.equal(expected);

    expect(enabledStub.calledOnceWithExactly(undefined, defaultValue)).to.be.eq(true);
  });

  it("should return true value when input is ok", () => {
    const input = faker.string.uuid();
    const expected = true;
    const request = stubInterface<PageRequestDto>();

    const enabledStub = booleanMapperMock.mapper;

    request.enabled = input;
    enabledStub.returns(expected);

    const result = mapper.mapper(request);

    expect(result).to.be.not.eq(null);
    expect(result).is.equal(expected);

    expect(enabledStub.calledOnceWithExactly(input, defaultValue)).to.be.eq(true);
  });

  it("should return false value when input is ok", () => {
    const input = faker.string.uuid();
    const expected = false;
    const request = stubInterface<PageRequestDto>();

    const enabledStub = booleanMapperMock.mapper;

    request.enabled = input;
    enabledStub.returns(expected);

    const result = mapper.mapper(request);

    expect(result).to.be.not.eq(null);
    expect(result).is.equal(expected);

    expect(enabledStub.calledOnceWithExactly(input, defaultValue)).to.be.eq(true);
  });
});
