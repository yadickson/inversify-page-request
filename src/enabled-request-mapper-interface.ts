import { PageRequestDto } from "page-request-dto";

export interface EnabledRequestMapperInterface {
  mapper(request: PageRequestDto): boolean;
}
