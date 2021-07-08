/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Arrow from './Arrow';
import { FC } from 'react';

const arrow = css`
  transform: rotate(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5px;
`;

const button = css`
  display: flex;
  border-radius: 25px;
  background-color: #262f3a;
  color: white;
  height: 35px;
  font-size: 14px;
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  text-align: center;
  right: 20px;
  flex-direction: column;

  min-width: 150px;
  justify-content: center;
  font-family: ubuntu, sans-serif;
`;

const get_started = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 5px;
`;

const Button: FC<{ onClick: Function }> = ({ onClick }) => {
  return (
    <div onClick={() => onClick()} css={button}>
      <div css={get_started}>
        <span>GET STARTED</span>
        <div css={arrow}>
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default Button;
