import { FormGroup, FormRow, Input, Label } from 'components';

import React from 'react';
import { useForm } from 'react-hook-form';

const CampaignAddNew = () => {
  const { handleSubmit, control } = useForm();
  return (
    <div className="py-10 px-[66px] bg-white rounded-xl">
      <div className="text-center">
        <h1 className="px-14 py-4 mb-10 bg-text4 bg-opacity-10 rounded-xl capitalize font-bold text-[25px] inline-block">
          Start a campaign 🚀
        </h1>
      </div>
      <form action="">
        <FormRow>
          <FormGroup>
            <Label>Campaign Title*</Label>
            <Input control={control} name="title" placeholder="Write a title" />
          </FormGroup>
          <FormGroup>
            <Label>Selecter Category*</Label>
            <Input control={control} name="title" placeholder="Write a title" />
          </FormGroup>
        </FormRow>
      </form>
    </div>
  );
};

export default CampaignAddNew;
