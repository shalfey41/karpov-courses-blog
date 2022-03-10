export interface ArticleItemAPI {
  id: number;
  attributes: {
    title: string;
    text: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface ArticlesAPI {
  data: ArticleItemAPI[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
