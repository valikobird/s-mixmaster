import { Form, useNavigation } from 'react-router-dom';
import styled from 'styled-components';

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form className='form'>
        <div className='form-row'>
          <input
            type='search'
            className='form-input'
            name='search'
            defaultValue={searchTerm}
            required
          />
        </div>
        <button type='submit' className='btn' disabled={isSubmitting}>
          {isSubmitting ? 'searching' : 'search drink'}
        </button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .form {
    display: grid;
    grid-template-columns: 1fr auto;
    margin-bottom: 3rem;

    .form-row {
      margin: 0;

      .form-input {
        width: 100%;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

    .btn {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;

export default SearchForm;
