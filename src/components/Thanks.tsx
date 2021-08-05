import Container from './Container';
import Unlock from './Unlock';

const Thanks = () => {
  return (
    <Container
      heading="Juhuu you're ready for pokes!"
      logo={<Unlock />}
      content="Pokes are the candidate's way of showing interest in your workplace."
      button="Find canditates"
    />
  );
};

export default Thanks;
