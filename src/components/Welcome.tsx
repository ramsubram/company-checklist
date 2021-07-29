/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Logo from './Logo';

const container_info = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  margin-top: 30px;
  flex-grow: 1;
  padding: 20px;
`;

const image = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const find_candidates_row = css`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  font-size: 14px;
  flex-grow: 1;
  align-items: center;
  justify-content: end;
`;

const find_candidates = css`
  height: 40px;
  width: 150px;
  background-color: #2aa859;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

const h1 = css`
  margin-bottom: 0;
  margin-top: 20px;
  font-size: 30px;
  font-family: 'Lobster Two', cursive;
  /* font-family: 'Sofia', cursive; */
`;

const p = css`
  max-width: 400px;
  margin-top: 3px;
  font-size: 14px;
`;

const anchor = css`
  text-decoration: none;
  color: white;
`;

const Welcome = () => {
  return (
    <div css={container_info}>
      <div css={image}>
        <Logo width="112px" height="90px" />
      </div>
      <h1 css={h1}>Welcome to WA.works </h1>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <p css={p}>
          View and interview as many candidates as you like, and don't pay until
          you're ready to hire
        </p>
      </div>

      <div css={find_candidates_row}>
        <a css={anchor} target="_blank" href="https://wa.works/company">
          <div css={find_candidates}>Find candidates</div>
        </a>
      </div>
    </div>
  );
};

export default Welcome;
