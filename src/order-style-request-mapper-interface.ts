import { PageRequestDto } from "page-request-dto";

export interface OrderStyleRequestMapperInterface {
  mapper(request: PageRequestDto): string;
}
