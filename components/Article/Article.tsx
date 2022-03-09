import React, { FC } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import themeClasses from '../../styles/theme.module.css';
import articleClasses from './article.module.css';

interface Props {
  title: string;
  text: string;
}

export const Article: FC<Props> = ({ title, text }) => {
  return (
    <>
      <article className={articleClasses.article}>
        <h1 className={classNames(themeClasses.h1, articleClasses.h1)}>
          {title}
        </h1>
        <ReactMarkdown>{text}</ReactMarkdown>
      </article>
      <Link href="/">
        <button
          className={classNames(themeClasses.button, articleClasses.button)}>
          Перейти к постам
        </button>
      </Link>
    </>
  );
};
