import React from 'react';
import type { NextPage, GetStaticPropsContext } from 'next';
import { Article } from '../components/Article/Article';

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
  if (context.params) {
    context.params.id;
  }
  return {
    props: {
      title: 'Удаленка vs работа в офисе',
      text: 'Я из тех, кто приспособился к работе из дома и начал ловить кайф: продуктивность в топе, минус время на дорогу, суперфокус на задаче, все четко. Были проблемы с социализацией, но со временем научился перебарывать этот движ.',
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: ['/my-page', '/my-page2', '/my-page3'],
    fallback: false,
  };
}

export default ArticlePage;
