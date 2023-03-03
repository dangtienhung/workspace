import * as yup from 'yup';

import { Button, CheckBox, IconToggle, Input, Label } from 'components';

import FormGroup from 'components/common/FormGroup';
import LayoutAuthentication from 'layouts/LayoutAuthentication';
import { Link } from 'react-router-dom';
import React from 'react';
import { useForm } from 'react-hook-form';
import useToogleValue from 'hooks/useToogleValue';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  username: yup.string().required('This field is required!'),
  email: yup.string().email('Invalid email address').required('This field is required!'),
  password: yup.string().required('This field is required!').min(8, 'Password must be 8 character'),
});

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });
  const handleSignUp = (values) => {
    console.log('🚀 ~ file: SignUpPage.jsx:26 ~ SignUpPage ~ values:', values);
  };
  const { value: accessTerm, handleToogleValue: handleToggleTerm } = useToogleValue();
  const { value: showPassword, handleToogleValue: handleTogglePassword } = useToogleValue();
  return (
    <LayoutAuthentication heading="Sign Up">
      <p className="mb-6 text-xs text-center capitalize font-body lg:text-sm text-text3 lg:mb-8">
        don't have an account?{' '}
        <Link to="/sign-in" className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <button className="flex items-center justify-center w-full py-3 mb-5 text-base font-semibold border rounded-lg outline-none gap-x-3 border-strock dark:border-darkStroke text-text2 dark:text-white">
        <img srcSet="/icon-google.png 2x" alt="icon-google" />
        <span className="capitalize">sign up with google</span>
      </button>
      <p className="mb-4 text-xs font-normal text-center capitalize lg:text-sm lg:mg-8 text-text2 dark:text-white">
        or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)} autoComplete="off">
        <FormGroup>
          <Label htmlFor="name">Full Name*</Label>
          <Input
            control={control}
            name="username"
            placeholder="Username"
            error={errors?.username?.message}
          />
        </FormGroup>
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
        <div className="flex items-start gap-x-5 mb-5">
          <CheckBox name="term" checked={accessTerm} onClick={handleToggleTerm}>
            <p className="font-nomal text-sm text-text2 dark:text-text3 flex-1">
              I agree to the <span className="text-secondary underline">Tearms of Use</span> and
              have read and understand the{' '}
              <span className="text-secondary underline">Privacy policy</span>.
            </p>
          </CheckBox>
        </div>
        <Button className="bg-primary w-full capitalize" kind="primary" type="submit">
          create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
