import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Feedback from '../components/feedback';
import SearchedTweets from '../components/searchedTweets';
export default function Talk({ pageContext: talk }) {
  return (
    <Layout>
      <SEO title={talk.title} />
      <div className="card relative">
        <small className="card-date">{talk.date}</small>
        <h1 className="card-title">{talk.title}</h1>
        <p>
          {talk.conference + ' - '}
          <a href={talk.slides}>Slides</a>
        </p>

        <p>{talk.description}</p>
      </div>
      <div className="card">
        <Feedback cardId={talk.id} />
      </div>
      <SearchedTweets />
    </Layout>
  );
}
