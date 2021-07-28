/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Arrow from './Arrow';
import { FC, useState } from 'react';
import Welcome from './Welcome';
import Discover from './Discover';

const MessageBox: FC<{ onHide: Function }> = ({ onHide }) => {
  const [view, setView] = useState<string>('welcome');

  const box = css`
    background-color: #262f3a;
    display: flex;
    flex-direction: column;
    color: white;
    width: 430px;
    height: 332px;
    padding: 12px 12px 12px 12px;
    position: fixed;
    bottom: 20px;
    right: 20px;
  `;

  const top = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px;
    font-size: 14px;
  `;

  const arrow = css`
    transform: rotate(360deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5px;
    margin-top: 7px;
  `;
  const arrow_down = css`
    transform: rotate(360deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5px;
    margin-top: 7px;
    cursor: pointer;
  `;

  const less_than = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5px;
    margin-right: 6px;
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
    margin-right: 0px;
  `;

  const hideButtons = () => {
    if (view === 'welcome') {
      return (
        <div css={top}>
          <div css={head}>
            <div css={check}>
              <div css={less_than}>
                <Arrow size={'8px'} rotate={90} />
              </div>

              <span onClick={() => setView('Discover')}> To checklist </span>
            </div>
          </div>

          <div onClick={() => onHide()} css={hide}>
            <span>Hide</span>
            <div css={arrow}>
              <Arrow size={'7px'} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div onClick={() => onHide()} css={arrow_down}>
            <Arrow size={'8px'} />
          </div>
        </div>
      );
    }
  };

  return (
    <div css={box}>
      {hideButtons()}
      {view === 'welcome' && <Welcome />}
      {view === 'Discover' && <Discover />}
    </div>
  );
};

export default MessageBox;
