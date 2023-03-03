import * as yup from 'yup';

import { Button, ButtonGoogle, IconToggle, Input, Label } from 'components';

import FormGroup from 'components/common/FormGroup';
import LayoutAuthentication from '../layouts/LayoutAuthentication';
import { Link } from 'react-router-dom';
import React from 'react';
import { useForm } from 'react-hook-form';
import useToogleValue from 'hooks/useToogleValue';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  email: yup.string().email('Invalid email address').required('This field is required!'),
  password: yup.string().required('This field is required!').min(8, 'Password must be 8 character'),
});

const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });
  const handleSignIn = (values) => {
    console.log('🚀 ~ file: SignUpPage.jsx:26 ~ SignUpPage ~ values:', values);
  };
  const { value: showPassword, handleToogleValue: handleTogglePassword } = useToogleValue();
  return (
    <LayoutAuthentication heading="welcome back!">
      <p className="mb-6 text-xs text-center capitalize font-body lg:text-sm text-text3 lg:mb-8">
        already have an account?{' '}
        <Link to="/sign-up" className="font-medium underline text-primary">
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign in with google" />
      <p className="mb-4 text-xs font-normal text-center capitalize lg:text-sm lg:mg-8 text-text2 dark:text-white">
        or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignIn)} autoComplete="off">
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            control={control}
            name="email"
            placeholder="Email"
            error={errors?.email?.message}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">password</Label>
          <Input
            control={control}
            type={`${showPassword ? 'text' : 'password'}`}
            name="password"
            placeholder="Password"
            error={errors?.password?.message}
          >
            <IconToggle open={showPassword} onClick={handleTogglePassword} />
          </Input>
        </FormGroup>
        <FormGroup>
          <div className="text-right">
            <span className="text-primary inline-block text-sm font-medium capitalize">
              Forgot Password
            </span>
          </div>
        </FormGroup>
        <Button className="bg-primary w-full capitalize" kind="primary" type="submit">
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
