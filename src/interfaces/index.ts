export interface ResponseDTO<T> {
  data: T;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  support: {
    url: string;
    text: string;
  };
}
