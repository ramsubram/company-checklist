/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Arrow from './Arrow';
import { FC } from 'react';

const MessageBox: FC<{ onHide: Function }> = ({ onHide }) => {
  const box = css`
    background-color: #2b3742;
    display: flex;
    align-items: center;
    width: 400px;
    height: 400px;
    justify-content: flex-end;
  `;

  const container = css`
    color: white;
    width: 100%;
  `;

  const arrow = css`
    transform: rotate(360deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5px;
  `;

  const hide = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 5px;
    cursor: pointer;
    width: 50px;
  `;

  const less_than = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 5px;
    flex-grow: -3;
  `;

  const check = css`
    display: flex;
    flex-direction: row;
  `;

  const head = css`
    display: flex;
    flex-direction: row;
    justify-content: ;
  `;

  const find_candidates = css`
    height: 40px;
    width: 150px;
    background-color: #35cc70;
  `;

  const top = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;

  return (
    <div css={box}>
      <div css={container}>
        <div css={top}>
          <div css={head}>
            <div css={less_than}>
              <Arrow size={'10px'} rotate={90} />
            </div>
            <span css={check}>To checklist</span>
          </div>

          <div onClick={() => onHide()} css={hide}>
            <span>Hide</span>
            <div css={arrow}>
              <Arrow />
            </div>
          </div>
        </div>

        <img src="/wa_comp_logo.png" alt="" />
        <h1>Welcome to WA.works </h1>
        <p>
          View and interview as many candidates as you like, and don't pay until
          you're ready to hire
        </p>

        <div css={find_candidates}>
          <section>Find candidates</section>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
