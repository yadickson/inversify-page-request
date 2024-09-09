export interface PageRequestModel {
  pageSize: number;
  pageNumber: number;
  orderBy: string;
  orderStyle: string;
  filterBy: string;
  filterContent: string;
  enabled: boolean;
}
