import React from 'react';
import type { NextPage } from 'next';
import { Posts } from '../components/Posts/Posts';
import { IArticlePreview } from '../types/ArticlePreview';
import { ArticlesAPI } from '../types/api';

interface Props {
  articles: IArticlePreview[];
}

const Home: NextPage<Props> = ({ articles }) => {
  return <Posts articles={articles} />;
};

export async function getStaticProps() {
  const response = await fetch(
    'https://desolate-tundra-55098.herokuapp.com/api/articles?sort[0]=publishedAt:desc',
  );
  const { data }: ArticlesAPI = await response.json();
  const articles: IArticlePreview[] = data.map((item) => {
    const text = new Intl.DateTimeFormat('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(item.attributes.publishedAt));

    return {
      title: item.attributes.title,
      text,
      slug: item.attributes.slug,
    };
  });

  return {
    props: {
      articles,
    },
  };
}

export default Home;
