import Header from '@/components/layout/header';
import ArticleHeader from '@/components/specific/article-header';
import BodyArticle from '@/components/specific/body-article';
import React from 'react';

export default function singlePage() {
  return (
    <React.Fragment>
      <Header />
      <ArticleHeader />
      <BodyArticle />
    </React.Fragment>
  );
}
