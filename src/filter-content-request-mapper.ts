import { inject, injectable } from "inversify";
import { STRING_MAPPER_TYPE, StringMapperInterface } from "inversify-string-mapper";
import { FilterContentRequestMapperInterface } from "filter-content-request-mapper-interface";
import { PageRequestDto } from "page-request-dto";

@injectable()
export class FilterContentRequestMapper implements FilterContentRequestMapperInterface {
  constructor(
    @inject(STRING_MAPPER_TYPE.StringMapper)
    private readonly stringMapper: StringMapperInterface
  ) {}

  public mapper(request: PageRequestDto): string {
    return this.stringMapper.mapper(request?.["filter-content"], undefined);
  }
}
