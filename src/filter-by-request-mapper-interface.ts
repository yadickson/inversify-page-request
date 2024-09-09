import { PageRequestDto } from "page-request-dto";

export interface FilterByRequestMapperInterface {
  mapper(request: PageRequestDto): string;
}
