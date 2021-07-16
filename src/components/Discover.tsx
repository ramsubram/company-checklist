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
  position: relative;
`;

const checkmark = css`
  display: flex;
  flex-direction: column;
  height: 25px;
  width: 25px;
  top: 1;
  left: 1;
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
          <input type="checkbox" />
          <span css={checkmark}></span>
          Upload logo
        </label>
        <label className="container">
          <input type="checkbox" />
          <span css={checkmark}></span>
          Add description
        </label>
        <label className="container">
          <input type="checkbox" />
          <span css={checkmark}></span>
          Upgrade
        </label>
      </div>
    </div>
  );
};

export default Discover;
