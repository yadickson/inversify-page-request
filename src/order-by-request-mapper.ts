import { inject, injectable } from "inversify";
import { STRING_MAPPER_TYPE, StringMapperInterface } from "inversify-string-mapper";
import { OrderByRequestMapperInterface } from "order-by-request-mapper-interface";
import { PageRequestDto } from "page-request-dto";

@injectable()
export class OrderByRequestMapper implements OrderByRequestMapperInterface {
  constructor(
    @inject(STRING_MAPPER_TYPE.StringMapper)
    private readonly stringMapper: StringMapperInterface
  ) {}

  public mapper(request: PageRequestDto): string {
    return this.stringMapper.mapper(request?.["order-by"], undefined);
  }
}
