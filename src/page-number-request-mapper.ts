import { inject, injectable } from "inversify";
import { NUMBER_MAPPER_TYPE, NumberMapperInterface } from "inversify-number-mapper";
import { PageNumberRequestMapperInterface } from "page-number-request-mapper-interface";
import { PageRequestDto } from "page-request-dto";

@injectable()
export class PageNumberRequestMapper implements PageNumberRequestMapperInterface {
  constructor(
    @inject(NUMBER_MAPPER_TYPE.NumberMapper)
    private readonly numberMapper: NumberMapperInterface
  ) {}

  public mapper(request: PageRequestDto): number {
    return this.numberMapper.mapper(request?.["page-number"], 1);
  }
}
