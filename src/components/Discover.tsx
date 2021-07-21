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

const progressbar = css`
  display: flex;
  flex-direction: row;
  height: 30px;
  width: 95%;
  background: #129999;
  border-radius: 5px;
  margin-top: 70px;
  margin-left: 12px;
  position: relative;
`;

const percent = css`
  color: black;
  padding-top: 4px;
  padding-left: 8px;
`;

const vl = css`
  border-left: 3px solid white;
  height: 40px;
  position: relative;
  left: 1%;
  margin-left: 3px;
`;
const vl2 = css`
  border-left: 3px solid white;
  height: 40px;
  position: relative;
  left: 87%;
  margin-left: 3px;
`;

const vl3 = css`
  border-left: 3px solid white;
  height: 40px;
  position: relative;
  left: 25%;
  margin-left: 3px;
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
      <div>
        <div css={progressbar}>
          <div css={vl}></div>
          <div css={percent}>100%</div>
          <div css={vl2}></div>
          <div css={vl3}></div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
