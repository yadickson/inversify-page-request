import { PageRequestDto } from "page-request-dto";

export interface FilterContentRequestMapperInterface {
  mapper(request: PageRequestDto): string;
}
