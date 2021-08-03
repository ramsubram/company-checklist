/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Container from './Container';

const img = css`
  height: 70px;
  width: 80px;
`;

const Thanks = () => {
  return (
    <Container
      heading="Juhuu you're ready for pokes!"
      logo={<img css={img} src="/unlock_party.png" />}
      content="Pokes are the candidate's way of showing interest in your workplace."
      button="Find canditates"
    />
  );
};

export default Thanks;
