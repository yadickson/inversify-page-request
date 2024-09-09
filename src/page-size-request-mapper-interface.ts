import { PageRequestDto } from "page-request-dto";

export interface PageSizeRequestMapperInterface {
  mapper(request: PageRequestDto): number;
}
