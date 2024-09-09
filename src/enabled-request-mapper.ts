import { inject, injectable } from "inversify";
import { BOOLEAN_MAPPER_TYPE, BooleanMapperInterface } from "inversify-boolean-mapper";
import { EnabledRequestMapperInterface } from "enabled-request-mapper-interface";
import { PageRequestDto } from "page-request-dto";

@injectable()
export class EnabledRequestMapper implements EnabledRequestMapperInterface {
  constructor(
    @inject(BOOLEAN_MAPPER_TYPE.BooleanMapper)
    private readonly booleanMapper: BooleanMapperInterface
  ) {}

  public mapper(request: PageRequestDto): boolean {
    return this.booleanMapper.mapper(request?.enabled, undefined);
  }
}
