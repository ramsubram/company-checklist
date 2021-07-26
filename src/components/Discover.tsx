/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

const h1 = css`
  margin-top: 30px;
  padding-left: 70px;
  font-size: 30px;
  font-family: 'Lobster Two', cursive;
`;

const container = css`
  display: flex;
  flex-direction: row;
  padding-left: 74px;
  margin-left: 0;
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
  border: 0.1em solid #26a859;
`;

const progressbar = css`
  height: 30px;
  width: 90%;
  background: #f3f3f3;
  border-radius: 5px;
  margin-top: 70px;
  position: absolute;
`;

const progress_content = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const prcnt = css`
  color: black;
  padding-top: 4px;
  padding-left: 14px;
  position: absolute;
`;

const mybar = css`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
`;

const vl = css`
  border-left: 3px solid white;
  height: 40px;
  position: relative;
  left: 2%;
  margin-left: 3px;
`;

const key = css`
  width: 20px;
  height: 20px;
  padding-top: 10px;
  padding-right: 29px;
`;

const line_container1 = css`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  position: absolute;
  left: 1px;
`;

const line_container2 = css`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  position: absolute;
  margin-left: 180px;
`;
const line_container3 = css`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  position: absolute;
  right: -37px;
`;

const box = css`
  margin: 0px;
  padding: 0px;
`;

const Discover = () => {
  const [checkbox1, setCheckbox1] = useState<Boolean>(false);
  const [checkbox2, setCheckbox2] = useState<Boolean>(false);
  const [checkbox3, setCheckbox3] = useState<Boolean>(false);

  const checkboxes = [checkbox1, checkbox2, checkbox3];
  const activeCheckboxes = checkboxes.filter((x) => x);
  const percent = Math.round(
    (100 / checkboxes.length) * activeCheckboxes.length
  );

  const checkBox1 = () => {
    checkbox1 === false ? setCheckbox1(!checkbox1) : setCheckbox1(false);
  };
  const checkBox2 = () => {
    checkbox2 === false ? setCheckbox2(!checkbox2) : setCheckbox2(false);
  };
  const checkBox3 = () => {
    checkbox3 === false ? setCheckbox3(!checkbox3) : setCheckbox3(false);
  };

  return (
    <div css={box}>
      <h1 css={h1}>Discover your next coworker</h1>
      <div>
        <label className="container" css={container}>
          <input onClick={checkBox1} type="checkbox" />
          <span className="checkmark" css={checkmark}></span>
          Upload logo
        </label>
        <label className="container" css={container}>
          <input onClick={checkBox2} type="checkbox" />
          <span className="checkmark" css={checkmark}></span>
          Add description
        </label>
        <label className="container" css={container}>
          <input onClick={checkBox3} type="checkbox" />
          <span className="checkmark" css={checkmark}></span>
          Upgrade
        </label>
      </div>
      <div css={progress_content}>
        <div css={progressbar}>
          <div css={mybar}>
            <div css={line_container1}>
              <div css={vl}></div>
              <img css={key} src="/yellow_key.png" alt="" />
            </div>
            <div css={line_container2}>
              <div css={vl}></div>
              <img css={key} src="/yellow_key.png" alt="" />
            </div>

            <div css={line_container3}>
              <div css={vl}></div>
              <img css={key} src="/yellow_key.png" alt="" />
            </div>
            <div css={prcnt}>{` ${percent}%`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
