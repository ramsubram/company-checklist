/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Button from './Button';
import MessageBox from './MessageBox';
import { useState } from 'react';

const Checklist = () => {
  const [open, setOpen] = useState<boolean>(true);

  const messageBox = css`
    visibility: ${open ? 'hidden' : 'visible'};
  `;

  return (
    <div>
      <div css={messageBox}>
        <MessageBox onHide={() => setOpen(true)} />
      </div>
      {open && <Button onClick={() => setOpen(false)} />}
    </div>
  );
};

export default Checklist;
