import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Container = styled.div`
  text-align: center;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <span
        css={`
          font-size: 10rem;
          margin: 20vmin 0;
          display: block;
        `}
        role="img"
        aria-label="facepalm emoji"
      >
        🤦🏻‍♂️
      </span>
      <h1>Whoops!</h1>
      <p>Looks like I haven't added it yet.</p>
    </Container>
  </Layout>
);

export default NotFoundPage;
