/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';

const h1 = css`
  margin-bottom: 0;
  margin-top: 30px;
  margin-left: 70px;
  font-size: 30px;
  font-family: 'Lobster Two', cursive;
`;

const ul = css`
  margin-left: 30px;
`;

const container = css`
  background: green;
`;

const Discover = () => {
  return (
    <div>
      <h1 css={h1}>Discover your next coworker</h1>

      <div css={ul}>
        <ul>
          <label css={container}>
            <input type="checkbox" />
          </label>
        </ul>
        <ul>
          <label>
            <input type="checkbox" />
          </label>
        </ul>
        <ul>
          <label>
            <input type="checkbox" />
          </label>
        </ul>
      </div>
    </div>
  );
};

export default Discover;
