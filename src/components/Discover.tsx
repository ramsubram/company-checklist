/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import Locks from './Locks';

interface Props {
  setView: Function;
}

const h1 = css`
  margin-top: 24px;
  padding-left: 20px;
  font-size: 24px;
  font-family: 'Lobster Two', cursive;
`;

const container = css`
  display: flex;
  flex-direction: row;
  padding-left: 25px;
  margin-bottom: 10px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 14px;
  padding-right: 20px;
`;

const checkmark = css`
  display: flex;
  top: 0;
  left: 0;
  margin-right: 12px;
  height: 12px;
  width: 12px;
  border: 0.1em solid #26a859;
`;

const progressbar_height = '27px';

const progressbar = css`
  height: ${progressbar_height};
  width: 90%;
  background: #f3f3f3;
  border-radius: 3px;
`;

const progress_content = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 23px;
`;

const prcnt = css`
  color: black;
  padding-top: 4px;
  padding-left: 14px;
  position: absolute;
  font-size: 14px;
`;

const mybar = css`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
`;

const vl = css`
  border-left: 2px solid white;
  height: 36px;
  position: relative;
  left: 2%;
  margin-left: 3px;
`;

const key = css`
  width: 12px;
  height: 12px;
  padding-top: 10px;
  padding-right: 29px;
`;

const box = css`
  margin: 0px;
  padding: 0px;
`;

const Discover = ({ setView }: Props) => {
  console.log('Discover');

  const [checkbox1, setCheckbox1] = useState<Boolean>(false);
  const [checkbox2, setCheckbox2] = useState<Boolean>(false);
  const [checkbox3, setCheckbox3] = useState<Boolean>(false);
  const [statement, setStatement] = useState<Boolean>(false);
  const [statement2, setStatement2] = useState<Boolean>(false);

  const checkboxes = [checkbox1, checkbox2, checkbox3];
  const activeCheckboxes = checkboxes.filter((x) => x);
  const percent = Math.floor(
    (100 / checkboxes.length) * activeCheckboxes.length
  );

  const light_teal = percent >= 33 ? '#52cbcc' : 'transparent';
  const teal1 = percent >= 66 ? '#2DA3A3' : 'transparent';
  const teal2 = percent === 100 ? '#2DA3A3' : '#FFFFFF';

  if (statement === false && percent === 33) {
    setView('Upload');
    setStatement(true);
  } else if (statement2 === false && percent === 100) {
    setView('Thanks');
    setStatement2(true);
  }

  const line_container1 = css`
    display: flex;
    flex-grow: 1.3;
    flex-direction: column;
    background: ${light_teal};
    height: ${progressbar_height};
    border-radius: 3px 0px 0px 3px;
    position: relative;
  `;

  const line_container2 = css`
    display: flex;
    position: relative;
    flex-grow: 1;
    flex-direction: column;
    background: ${teal1};
  `;

  const line_container3 = css`
    display: flex;
    flex-grow: 1;
    background: ${teal2};
    border-radius: 0px 3px 3px 0px;
    flex-direction: row-reverse;
  `;

  const mini_container1 = css`
    position: absolute;
    left: 1px;
  `;

  const mini_container2 = css`
    position: absolute;
    left: -14px;
  `;
  const mini_container3 = css`
    position: absolute;
    width: 0px;
    display: flex;
    right: 11px;
    flex-direction: column;
  `;

  const checkBox1 = () => {
    console.log(checkbox1);
    setCheckbox1(!checkbox1);
  };

  useEffect(() => {
    console.log(checkbox1);
  }, [checkbox1]);

  const checkBox2 = () => {
    setCheckbox2(!checkbox2);
  };

  const checkBox3 = () => {
    setCheckbox3(!checkbox3);
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
              <div css={mini_container1}>
                <div css={vl}></div>
                <img css={key} src="/yellow_key.png" alt="" />
              </div>
            </div>

            <div css={line_container2}>
              <div css={mini_container2}>
                <div css={vl}></div>
                <img css={key} src="/yellow_key.png" alt="" />
              </div>
            </div>

            <div css={line_container3}>
              <div css={mini_container3}>
                <div css={vl}></div>
                <img css={key} src="/yellow_key.png" alt="" />
              </div>
            </div>
            <div css={prcnt}>{`${percent}%`}</div>
          </div>
        </div>
      </div>
      <Locks percent={percent} />
    </div>
  );
};

export default Discover;
