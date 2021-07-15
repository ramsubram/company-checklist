/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

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

const container = css``;

const checkmark = css`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: green;
`;

const Discover = () => {
  return (
    <div>
      <h1 css={h1}>Discover your next coworker</h1>

      <div css={ul}>
        <ul>
          <label className="container" css={container}>
            <input type="checkbox" />
            <span css={checkmark}></span>
            Upload logo
          </label>
        </ul>
        <ul>
          <label className="container">
            <input type="checkbox" />
            <span css={checkmark}></span>
            Add description
          </label>
        </ul>
        <ul>
          <label className="container">
            <input type="checkbox" />
            <span css={checkmark}></span>
            Upgrade
          </label>
        </ul>
      </div>
    </div>
  );
};

export default Discover;
