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
      eyecatch: {
        url: string;
        height: number;
        width: number;
      } | undefined;
      categorys: Array<{
        id: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        revisedAt: string;
        name: string;
      }>;
    }
  ];
  totalCount: number;
  offset: number;
  limit: number;
};
