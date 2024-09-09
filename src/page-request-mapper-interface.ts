import { PageRequestDto } from "page-request-dto";
import { PageRequestModel } from "page-request-model";

export interface PageRequestMapperInterface {
  fromDtoToModel(request: PageRequestDto): PageRequestModel;
}
