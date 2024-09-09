import { inject, injectable } from "inversify";
import { NUMBER_MAPPER_TYPE, NumberMapperInterface } from "inversify-number-mapper";
import { PageRequestDto } from "page-request-dto";
import { PageSizeRequestMapperInterface } from "page-size-request-mapper-interface";

@injectable()
export class PageSizeRequestMapper implements PageSizeRequestMapperInterface {
  constructor(
    @inject(NUMBER_MAPPER_TYPE.NumberMapper)
    private readonly numberMapper: NumberMapperInterface
  ) {}

  public mapper(request: PageRequestDto): number {
    return this.numberMapper.mapper(request?.["page-limit"], 50);
  }
}
