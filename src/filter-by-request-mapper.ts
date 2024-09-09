import { inject, injectable } from "inversify";
import { STRING_MAPPER_TYPE, StringMapperInterface } from "inversify-string-mapper";
import { FilterByRequestMapperInterface } from "filter-by-request-mapper-interface";
import { PageRequestDto } from "page-request-dto";

@injectable()
export class FilterByRequestMapper implements FilterByRequestMapperInterface {
  constructor(
    @inject(STRING_MAPPER_TYPE.StringMapper)
    private readonly stringMapper: StringMapperInterface
  ) {}

  public mapper(request: PageRequestDto): string {
    return this.stringMapper.mapper(request?.["filter-by"], undefined);
  }
}
