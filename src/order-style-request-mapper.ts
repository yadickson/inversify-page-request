import { inject, injectable } from "inversify";
import { STRING_MAPPER_TYPE, StringMapperInterface } from "inversify-string-mapper";
import { OrderStyleRequestMapperInterface } from "order-style-request-mapper-interface";
import { PageRequestDto } from "page-request-dto";

@injectable()
export class OrderStyleRequestMapper implements OrderStyleRequestMapperInterface {
  constructor(
    @inject(STRING_MAPPER_TYPE.StringMapper)
    private readonly stringMapper: StringMapperInterface
  ) {}

  public mapper(request: PageRequestDto): string {
    const value = this.stringMapper.mapper(request?.["order-style"], "asc").toLocaleLowerCase();
    return value === "desc" ? "desc" : "asc";
  }
}
