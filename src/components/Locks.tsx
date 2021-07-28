/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

const lock = css`
  width: 15px;
  height: 20px;
  padding-top: 10px;
  padding-right: 29px;
`;
const all_lock = css`
  display: flex;
  justify-content: center;
`;

const text = css`
  font-size: 12px;
`;

<div css={all_lock}>
  <div>
    <img css={lock} src="/keylock_locked.png" alt="" />
    <div css={text}>
      <p>Free interviews Pay per hire</p>
    </div>
  </div>
  <div>
    <img css={lock} src="/keylock_locked.png" alt="" />
    <div>
      <p>Poke from userse</p>
    </div>
  </div>
  <div>
    <img css={lock} src="/keylock_locked.png" alt="" />
    <div>
      <p>Access to contact info</p>
      <p>Publish job listings</p>
      <p>Poke Anonymous</p>
      <p>Unlimited free hires</p>
    </div>
  </div>
</div>;
