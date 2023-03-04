import { Button, Input } from 'components';

import React from 'react';
import { useForm } from 'react-hook-form';

const CampaignSupport = () => {
  const { control } = useForm();
  return (
    <div>
      <h2 className="font-semibold mb-5 text-lg">Support</h2>
      <div className="w-full bg-white shadow-1 py-7 px-6 flex flex-col justify-center">
        <p className="text-xl mb-8 text-center capitalize text-text3">Please widthout reward</p>
        <Input
          placeholder="$10"
          control={control}
          name="Pledge"
          className="w-full px-5 py-3 mb-5 text-lg font-medium border rounded border-strock"
        />
        <div className="p-5 mb-5 bg-grayf3 rounded-xl">
          <p className="mb-5 text-sm font-semibold text-text2">
            Back it because you believe in it.
          </p>
          <p className="text-sm text-text3">
            Support the project for no reward, just because it speaks to you.
          </p>
        </div>
        <Button type="button" kind="primary">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CampaignSupport;
