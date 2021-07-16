/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const h1 = css`
  margin-bottom: 0;
  margin-top: 30px;
  margin-left: 70px;
  font-size: 30px;
  font-family: 'Lobster Two', cursive;
`;

const container = css`
  display: flex;
  flex-direction: column;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 14px;
`;

const checkmark = css`
  display: flex;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #26a859;
`;

const Discover = () => {
  return (
    <div>
      <h1 css={h1}>Discover your next coworker</h1>
      <div>
        <label className="container" css={container}>
          Upload logo
          <input type="checkbox" />
          <span css={checkmark}></span>
        </label>
        <label className="container" css={container}>
          Add description
          <input type="checkbox" />
          <span css={checkmark}></span>
        </label>
        <label className="container" css={container}>
          Upgrade
          <input type="checkbox" />
          <span css={checkmark}></span>
        </label>
      </div>
    </div>
  );
};

export default Discover;
