import { PageRequestDto } from "page-request-dto";

export interface OrderByRequestMapperInterface {
  mapper(request: PageRequestDto): string;
}
