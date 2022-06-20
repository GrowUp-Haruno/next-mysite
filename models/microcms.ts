export type eyecatchType = {
  url: string;
  height: number;
  width: number;
};

export type categoryType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
};

export type contentsType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  mainTitle: string;
  subTitle: string;
  content: string;
  eyecatch: eyecatchType;
  categories: Array<categoryType>;
};

export type microcmsDataType = {
  contents: Array<contentsType>;
  totalCount: number;
  offset: number;
  limit: number;
};
