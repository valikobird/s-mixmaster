import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CocktailCard = ({ image, name, id, info, glass }) => {
  return (
    <Wrapper>
      <div className='img-container'>
        <img src={image} alt={name} className='img' />
      </div>
      <div className='footer'>
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className='btn'>
          details
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background-color: white;
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: 4px;

  &:hover {
    box-shadow: var(--shadow-4);
  }

  img {
    height: 15rem;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .footer {
    padding: 1.5rem;

    h4,
    h5 {
      margin-bottom: 0.5rem;
    }

    h4 {
      font-weight: 600;
    }

    p {
      margin-bottom: 1rem;
      color: var(--grey-500);
    }
  }
`;

export default CocktailCard;
