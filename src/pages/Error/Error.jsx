import styled from 'styled-components';
import img from '../../assets/not-found.svg';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt='not found' />
          <h3>Ohh!</h3>
          <p>We can't seem to find the page you are looking for.</p>
          <Link to='/'>back home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h3>something went wrong</h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: var(--view-width);
    max-width: var(--fixed-width);
    display: block;
    margin-bottom: 2rem;
    margin-top: -5rem;
  }

  h3 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--primary-800);
  }

  p {
    line-height: 2;
    margin-bottom: 0.75rem;
    color: var(--grey-600);
  }

  a {
    text-transform: capitalize;
    color: var(--primary-500);
    font-weight: 500;

    &:hover {
      color: var(--primary-600);
    }
  }
`;

export default Error;
