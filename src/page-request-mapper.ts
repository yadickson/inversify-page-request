import { inject, injectable } from "inversify";
import { EnabledRequestMapperInterface } from "enabled-request-mapper-interface";
import { FilterByRequestMapperInterface } from "filter-by-request-mapper-interface";
import { FilterContentRequestMapperInterface } from "filter-content-request-mapper-interface";
import { OrderByRequestMapperInterface } from "order-by-request-mapper-interface";
import { OrderStyleRequestMapperInterface } from "order-style-request-mapper-interface";
import { PageNumberRequestMapperInterface } from "page-number-request-mapper-interface";
import { PageRequestDto } from "page-request-dto";
import { PageRequestMapperInterface } from "page-request-mapper-interface";
import { PageRequestModel } from "page-request-model";
import { PAGE_REQUEST_TYPE } from "page-request-type";
import { PageSizeRequestMapperInterface } from "page-size-request-mapper-interface";

@injectable()
export class PageRequestMapper implements PageRequestMapperInterface {
  constructor(
    @inject(PAGE_REQUEST_TYPE.PageSizeRequestMapper)
    private readonly pageSizeMapper: PageSizeRequestMapperInterface,
    @inject(PAGE_REQUEST_TYPE.PageNumberRequestMapper)
    private readonly pageNumberMapper: PageNumberRequestMapperInterface,
    @inject(PAGE_REQUEST_TYPE.OrderByRequestMapper)
    private readonly orderByMapper: OrderByRequestMapperInterface,
    @inject(PAGE_REQUEST_TYPE.OrderStyleRequestMapper)
    private readonly orderStyleMapper: OrderStyleRequestMapperInterface,
    @inject(PAGE_REQUEST_TYPE.FilterByRequestMapper)
    private readonly filterByMapper: FilterByRequestMapperInterface,
    @inject(PAGE_REQUEST_TYPE.FilterContentRequestMapper)
    private readonly filterContentMapper: FilterContentRequestMapperInterface,
    @inject(PAGE_REQUEST_TYPE.EnabledRequestMapper)
    private readonly enabledMapper: EnabledRequestMapperInterface
  ) {}

  public fromDtoToModel(request: PageRequestDto): PageRequestModel {
    return {
      pageSize: this.getPageSize(request),
      pageNumber: this.getPageNumber(request),
      orderBy: this.getOrderBy(request),
      orderStyle: this.getOrderStyle(request),
      filterBy: this.getFilterBy(request),
      filterContent: this.getFilterContent(request),
      enabled: this.getEnabled(request),
    };
  }

  private getPageSize(request: PageRequestDto): number {
    return this.pageSizeMapper.mapper(request);
  }

  private getPageNumber(request: PageRequestDto): number {
    return this.pageNumberMapper.mapper(request);
  }

  private getOrderBy(request: PageRequestDto): string {
    return this.orderByMapper.mapper(request);
  }

  private getOrderStyle(request: PageRequestDto): string {
    return this.orderStyleMapper.mapper(request);
  }

  private getFilterBy(request: PageRequestDto): string {
    return this.filterByMapper.mapper(request);
  }

  private getFilterContent(request: PageRequestDto): string {
    return this.filterContentMapper.mapper(request);
  }

  private getEnabled(request: PageRequestDto): boolean {
    return this.enabledMapper.mapper(request);
  }
}
