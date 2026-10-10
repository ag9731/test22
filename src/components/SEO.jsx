import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url }) => {
  const fullTitle = `${title} | Parvi Digital`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {url && <link rel="canonical" href={`https://www.parvidigital.com${url}`} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={`https://www.parvidigital.com${url}`} />}
    </Helmet>
  );
};

export default SEO;
