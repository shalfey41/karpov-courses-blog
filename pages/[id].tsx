import React from 'react';
import type { NextPage, GetStaticPropsContext } from 'next';
import { Article } from '../components/Article/Article';
import { ArticlesAPI } from '../types/api';

interface Props {
  title: string;
  text: string;
}

const ArticlePage: NextPage<Props> = ({ title, text }) => {
  return <Article title={title} text={text} />;
};

export async function getStaticProps(
  context: GetStaticPropsContext<{ id: string }>,
) {
  if (!context.params?.id) {
    throw Error('no id');
  }

  const response = await fetch(
    `https://desolate-tundra-55098.herokuapp.com/api/articles?filters[slug][$eq]=${context.params.id}`,
  );
  const { data }: ArticlesAPI = await response.json();

  if (!data.length) {
    throw Error('no article');
  }

  const article = data[0];

  return {
    props: {
      title: article.attributes.title,
      text: article.attributes.text,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch(
    'https://desolate-tundra-55098.herokuapp.com/api/articles',
  );
  const { data }: ArticlesAPI = await response.json();

  return {
    paths: data.map((item) => `/${item.attributes.slug}`),
    fallback: false,
  };
}

export default ArticlePage;
