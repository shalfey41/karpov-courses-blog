import React, { FC } from 'react';
import Link from 'next/link';
import previewClasses from './article-preview.module.css';
import { IArticlePreview } from '../../types/ArticlePreview';

export const ArticlePreview: FC<IArticlePreview> = ({ slug, title, text }) => {
  return (
    <Link href={`/${slug}`} passHref>
      <a role="article" className={previewClasses.article}>
        <h2 className={previewClasses.title}>{title}</h2>
        <p className={previewClasses.text}>{text}</p>
      </a>
    </Link>
  );
};
