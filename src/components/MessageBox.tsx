/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Arrow from './Arrow';
import { FC } from 'react';

const MessageBox: FC<{ onHide: Function }> = ({ onHide }) => {
  const box = css`
    background-color: #262f3a;
    display: flex;
    flex-direction: column;
    color: white;
    width: 400px;
    height: 400px;
    padding: 12px 70px 50px;
  `;

  const arrow = css`
    transform: rotate(360deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5px;
  `;

  const less_than = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5px;
  `;

  const check = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    cursor: pointer;
  `;

  const hide = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 5px;
    cursor: pointer;
    width: 50px;
  `;

  const head = css`
    display: flex;
    flex-direction: row;
  `;

  const find_candidates = css`
    height: 40px;
    width: 150px;
    background-color: #2aa859;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  const top = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;
  const container_info = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    flex-grow: 1;
  `;

  const image = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `;

  const find_candidates_row = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `;

  return (
    <div css={box}>
      <div css={top}>
        <div css={head}>
          <div css={check}>
            <div css={less_than}>
              <Arrow size={'9px'} rotate={90} />
            </div>
            <span>To checklist</span>
          </div>
        </div>

        <div onClick={() => onHide()} css={hide}>
          <span>Hide</span>
          <div css={arrow}>
            <Arrow size={'7px'} />
          </div>
        </div>
      </div>
      <div css={container_info}>
        <div css={image}>
          <img width="112px" height="90px" src="/wa_comp_logo.png" alt="" />
        </div>
        <h1>Welcome to WA.works </h1>
        <p>
          View and interview as many candidates as you like, and don't pay until
          you're ready to hire
        </p>

        <div css={find_candidates_row}>
          <div css={find_candidates}>
            <section>Find candidates</section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
