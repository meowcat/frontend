import React, { useState } from 'react';
import { Link, useNavigate } from '@reach/router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import ErrorItem from './ErrorItem';

import { useSigninLazyQuery } from '../../utils/generated';

interface UserInput {
  email: string;
  password: string;
}

const Signin = (_: any) => {
  const [clicked, setClicked] = useState(false);
  const [signInQuery, { loading, data }] = useSigninLazyQuery();
  const navigate = useNavigate();

  // Redirect on success
  if (clicked && data?.signin) {
    const { token, user } = data.signin;
    localStorage.setItem('token', token);
    localStorage.setItem('user_id', user._id);
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/');
  }

  const initialValues = { email: '', password: '' };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Not valid email')
      .required('Required')
      .nullable(),
    password: Yup.string().required('Required').nullable(),
  });

  const onSubmit = (variables: UserInput) => {
    setClicked(true);
    signInQuery({ variables });
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm leading-5 text-center text-gray-600">
            Or
            <Link
              to="/signup"
              className="pl-1 font-medium text-blue-600 transition duration-150 ease-in-out hover:text-blue-500 focus:outline-none focus:underline"
            >
              create an account
            </Link>
          </p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="mt-8">
            <div className="rounded-md shadow-sm">
              <div>
                <Field
                  aria-label="Email address"
                  placeholder="Email address"
                  name="email"
                  type="email"
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                />
              </div>
              <div className="-mt-px">
                <Field
                  aria-label="Password"
                  placeholder="Password"
                  name="password"
                  type="password"
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <ul>
                <ErrorMessage name="email">
                  {(msg) => <ErrorItem name="Email" msg={msg} />}
                </ErrorMessage>
                <ErrorMessage name="password">
                  {(msg) => <ErrorItem name="Password" msg={msg} />}
                </ErrorMessage>
                {clicked && data?.signin === null && (
                  <ErrorItem
                    name="Error"
                    msg="The user password combination is wrong"
                  />
                )}
              </ul>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="relative flex justify-center w-full px-4 py-2 mt-6 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md group hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700"
            >
              {loading ? 'Loading' : 'Sign in'}
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Signin;
