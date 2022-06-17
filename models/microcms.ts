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

export type microcmsDataType = {
  contents: [
    {
      id: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      revisedAt: string;
      mainTitle: string;
      seriesTitle: string;
      content: string;
      eyecatch: eyecatchType;
      categories: Array<categoryType>;
    }
  ];
  totalCount: number;
  offset: number;
  limit: number;
};
