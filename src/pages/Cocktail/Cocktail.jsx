import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link, Navigate, useLoaderData } from 'react-router-dom';
import styled from 'styled-components';

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const singleCocktailQuery = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`);
      return data;
    },
  };
};

export const loader = (queryClient) => {
  return async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleCocktailQuery(id));

    return { id };
  };
};

const Cocktail = () => {
  const { id } = useLoaderData();
  const { data } = useQuery(singleCocktailQuery(id));

  if (!data || data.drinks === null) {
    return <Navigate to='/' />;
  }

  const singleDrink = data.drinks[0];
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const getIngredients = (drink) => {
    const result = Object.entries(drink)
      .filter(([name, value]) => name.startsWith('strIngredient') && !!value)
      .map(([_, value]) => value);

    return result;
  };

  const ingredients = getIngredients(singleDrink);

  return (
    <Wrapper>
      <header>
        <Link to='/' className='btn'>
          back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className='drink'>
        <img src={image} alt={name} className='img' />
        <div className='drink-info'>
          <span className='drink-data-title'>name :</span>
          <span className='drink-data-info'>{name}</span>
          <span className='drink-data-title'>category :</span>
          <span className='drink-data-info'>{category}</span>
          <span className='drink-data-title'>info :</span>
          <span className='drink-data-info'>{info}</span>
          <span className='drink-data-title'>glass :</span>
          <span className='drink-data-info'>{glass}</span>
          <span className='drink-data-title'>ingredients :</span>
          <span className='drink-data-info'>{ingredients.join(' , ')}</span>
          <span className='drink-data-title'>instructions :</span>
          <span className='drink-data-info'>{instructions}</span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  header {
    text-align: center;
    margin-bottom: 2rem;

    h3 {
      margin-top: 2rem;
    }
  }

  .drink {
    display: grid;
    grid-template-columns: 1fr;

    .img {
      margin: 0 auto;
      margin-bottom: 2rem;
      max-height: 400px;
      max-width: 400px;
      border-radius: 4px;
    }

    .drink-info {
      text-transform: capitalize;
      font-weight: 700;
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 1rem;
      align-items: start;

      .drink-data-title {
        background-color: var(--primary-100);
        padding: 0.35rem 0.75rem;
        border-radius: 4px;
        margin-right: 0.5rem;
        color: var(--primary-800);
      }

      .drink-data-info {
        padding-top: 0.25rem;
        line-height: 1.3;
      }
    }
  }

  @media (min-width: 920px) {
    .drink {
      grid-template-columns: auto 1fr;
      gap: 3rem;
      align-items: center;
    }
  }
`;

export default Cocktail;
