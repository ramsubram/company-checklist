import Container from './Container';
import Logo from './Logo';

const Welcome = () => {
  return (
    <Container
      heading="Welcome to WA. Works"
      logo={<Logo />}
      content="View and interview as you like, and don't pay  you're ready to hire"
      button="Find canditates"
    />
  );
};

export default Welcome;
