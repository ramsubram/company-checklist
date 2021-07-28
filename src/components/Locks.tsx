/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

interface Props {
  percent?: number;
}

const lock = css`
  width: 15px;
  height: 19px;
  padding-right: 5px;
`;
const container = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const text = css`
  font-size: 11px;
  color: #52cbcc;
  padding-top: 4px;
  padding-left: 2px;
`;

const wrapper = css`
  display: flex;
  flex-direction: row;
  margin: 3px;
  margin-top: 38px;
  padding: 12px;
`;

const lock_open = <img css={lock} src="keylock_open.png" alt="" />;
const lock_locked = <img css={lock} src="keylock_locked.png" alt="" />;

const Locks = ({ percent = 0 }: Props) => {
  return (
    <div css={container}>
      <div css={wrapper}>
        {percent >= 33 ? lock_open : lock_locked}
        <div css={text}>
          <div>Free interviews</div>
          <div>Pay per hire</div>
        </div>
      </div>
      <div css={wrapper}>
        {percent >= 66 ? lock_open : lock_locked}
        <div css={text}>
          <div>Poke from users</div>
        </div>
      </div>
      <div css={wrapper}>
        {percent === 100 ? lock_open : lock_locked}
        <div css={text}>
          <div>Access to contact info</div>
          <div>Publish job listings</div>
          <div>Poke Anonymous</div>
          <div>Unlimited free hires</div>
        </div>
      </div>
    </div>
  );
};

export default Locks;
