import { PageRequestDto } from "page-request-dto";

export interface PageNumberRequestMapperInterface {
  mapper(request: PageRequestDto): number;
}
