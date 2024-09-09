import { ContainerModule } from "inversify";
import { EnabledRequestMapper } from "enabled-request-mapper";
import { EnabledRequestMapperInterface } from "enabled-request-mapper-interface";
import { FilterByRequestMapper } from "filter-by-request-mapper";
import { FilterByRequestMapperInterface } from "filter-by-request-mapper-interface";
import { FilterContentRequestMapper } from "filter-content-request-mapper";
import { FilterContentRequestMapperInterface } from "filter-content-request-mapper-interface";
import { OrderByRequestMapper } from "order-by-request-mapper";
import { OrderByRequestMapperInterface } from "order-by-request-mapper-interface";
import { OrderStyleRequestMapper } from "order-style-request-mapper";
import { OrderStyleRequestMapperInterface } from "order-style-request-mapper-interface";
import { PageNumberRequestMapper } from "page-number-request-mapper";
import { PageNumberRequestMapperInterface } from "page-number-request-mapper-interface";
import { PageRequestMapper } from "page-request-mapper";
import { PageRequestMapperInterface } from "page-request-mapper-interface";
import { PAGE_REQUEST_TYPE } from "page-request-type";
import { PageSizeRequestMapper } from "page-size-request-mapper";
import { PageSizeRequestMapperInterface } from "page-size-request-mapper-interface";

export class PageRequestModule extends ContainerModule {
  constructor() {
    super((bind) => {
      bind<PageRequestMapperInterface>(PAGE_REQUEST_TYPE.PageRequestMapper).to(PageRequestMapper);
      bind<PageSizeRequestMapperInterface>(PAGE_REQUEST_TYPE.PageSizeRequestMapper).to(PageSizeRequestMapper);
      bind<PageNumberRequestMapperInterface>(PAGE_REQUEST_TYPE.PageNumberRequestMapper).to(PageNumberRequestMapper);
      bind<OrderByRequestMapperInterface>(PAGE_REQUEST_TYPE.OrderByRequestMapper).to(OrderByRequestMapper);
      bind<OrderStyleRequestMapperInterface>(PAGE_REQUEST_TYPE.OrderStyleRequestMapper).to(OrderStyleRequestMapper);
      bind<FilterByRequestMapperInterface>(PAGE_REQUEST_TYPE.FilterByRequestMapper).to(FilterByRequestMapper);
      bind<FilterContentRequestMapperInterface>(PAGE_REQUEST_TYPE.FilterContentRequestMapper).to(FilterContentRequestMapper);
      bind<EnabledRequestMapperInterface>(PAGE_REQUEST_TYPE.EnabledRequestMapper).to(EnabledRequestMapper);
    });
  }
}
