import { Form, useNavigation } from 'react-router-dom';
import styled from 'styled-components';

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form className='form' method='POST'>
        <h4 className='title'>our newsletter</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            name='name'
            id='name'
            required
          />
        </div>
        <div className='form-row'>
          <label htmlFor='lastName' className='form-label'>
            last name
          </label>
          <input
            type='text'
            className='form-input'
            name='lastName'
            id='lastName'
            required
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-input'
            name='email'
            id='email'
            required
            defaultValue='test@test.com'
          />
        </div>
        <button type='submit' className='btn btn-block' disabled={isSubmitting}>
          {isSubmitting ? 'submitting' : 'submit'}
        </button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }

  .form-input {
    width: 100%;
  }

  .btn {
    margin-top: 0.5rem;
  }
`;

export default Newsletter;
