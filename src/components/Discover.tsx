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
  flex-direction: row;
  margin-left: 74px;
  margin-bottom: 12px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 16px;
  padding-right: 20px;
`;

const checkmark = css`
  display: flex;
  top: 0;
  left: 0;
  margin-right: 27px;
  height: 20px;
  width: 20px;
  background-color: #26a859;
`;

const Discover = () => {
  return (
    <div>
      <h1 css={h1}>Discover your next coworker</h1>
      <div>
        <label className="container" css={container}>
          <input type="checkbox" />
          <span className="checkmark" css={checkmark}></span>
          Upload logo
        </label>
        <label className="container" css={container}>
          <input type="checkbox" />
          <span className="checkmark" css={checkmark}></span>
          Add description
        </label>
        <label className="container" css={container}>
          <input type="checkbox" />
          <span className="checkmark" css={checkmark}></span>
          Upgrade
        </label>
      </div>
    </div>
  );
};

export default Discover;
