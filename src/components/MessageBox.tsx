/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Arrow from './Arrow';
import { FC, useState } from 'react';
import Welcome from './Welcome';
import Discover from './Discover';
import Logo from './Logo';
import Container from './Container';
import { workerData } from 'worker_threads';

interface IProps {
  id: any;
}

const MessageBox: FC<{ onHide: Function }> = ({ onHide }) => {
  const [view, setView] = useState<string>('welcome');

  const box = css`
    background-color: #262f3a;
    display: flex;
    flex-direction: column;
    color: white;
    width: 456px;
    height: 371px;
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
    font-size: 12px;
  `;

  const hide = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 5px;
    font-size: 12px;
    cursor: pointer;
    width: 50px;
  `;

  const head = css`
    display: flex;
    flex-direction: row;
    margin-right: 0px;
  `;

  const ls = [
    {
      id: 'Upload',
      heading: "Juhuu you're ready for pokes!",
      logo: <Logo />,
      content:
        "Pokes are the candidate's way of showing interest in your workplace.",
      button: 'Find canditates',
    },
    {
      id: 'Thanks',
      heading: 'Thanks for upgrading!',
      logo: <Logo />,
      content:
        "You're now on the all" +
        ' inclusice cruise ' +
        ' where every feature and hire included.',
      button: 'Find next hire',
    },
  ];

  console.log(ls);
  const hideButtons = () => {
    if (view === 'Upload' || view === 'Thanks' || view === 'welcome') {
      return (
        <div css={top}>
          <div css={head}>
            <div css={check}>
              <div css={less_than}>
                <Arrow size={'8px'} rotate={90} />
              </div>

              <span onClick={() => setView('Discover')}>
                {view === 'welcome' ? 'To checklist ' : 'Back'}
              </span>
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

  const display = css`
    display: ${view !== 'Discover' ? 'none' : 'block'};
  `;

  return (
    <div css={box}>
      {hideButtons()}
      {view === 'welcome' && <Welcome />}

      <div css={display}>
        <Discover setView={setView} />
      </div>

      {ls
        .filter((item) => item.id === view)
        .map((x, i) => (
          <Container
            key={i}
            heading={x.heading}
            logo={x.logo}
            content={x.content}
            button={x.button}
          />
        ))}
    </div>
  );
};

export default MessageBox;
