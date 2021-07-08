import Button from './Button';
import MessageBox from './MessageBox';
import Welcome from './Welcome';
import { useState } from 'react';

const Checklist = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      {open ? (
        <MessageBox onHide={() => setOpen(false)} />
      ) : (
        <Button onClick={() => setOpen(true)} />
      )}
    </div>
  );
};

export default Checklist;
