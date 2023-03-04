import 'react-quill/dist/quill.snow.css';

import { Button, FormGroup, FormRow, Input, Label, Textarea } from 'components';
import React, { useMemo, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';

import { Dropdown } from 'components/dropdown';
import ImageUploader from 'quill-image-uploader';
import axios from 'axios';
import { useForm } from 'react-hook-form';

Quill.register('modules/imageUploader', ImageUploader);

const CampaignAddNew = () => {
  const [content, setContent] = useState('');
  const { handleSubmit, control } = useForm();
  const handleAddNewCampaign = (values) => {
    console.log('🚀 ~ file: CampaignAddNew.jsx:10 ~ handleAddNewCampaign ~ values:', values);
  };
  const modules = useMemo(
    () => ({
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote'],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['link', 'image'],
      ],
      imageUploader: {
        // imgbbAPI
        upload: async (file) => {
          // const bodyFormData = new FormData();
          // bodyFormData.append("image", file);
          // const response = await axios({
          //   method: "post",
          //   url: imgbbAPI,
          //   data: bodyFormData,
          //   headers: {
          //     "Content-Type": "multipart/form-data",
          //   },
          // });
          // return response.data.data.url;
        },
      },
    }),
    []
  );
  return (
    <div className="py-10 px-[66px] bg-white rounded-xl">
      <div className="text-center">
        <h1 className="px-14 py-4 mb-10 bg-text4 bg-opacity-10 rounded-xl capitalize font-bold text-[25px] inline-block">
          Start a campaign 🚀
        </h1>
      </div>
      <form onSubmit={handleSubmit(handleAddNewCampaign)}>
        <FormRow>
          <FormGroup>
            <Label>Campaign Title*</Label>
            <Input control={control} name="title" placeholder="Write a title" />
          </FormGroup>
          <FormGroup>
            <Label>Selecter Category*</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select the category" />
              <Dropdown.List>
                <Dropdown.Option>Architecture</Dropdown.Option>
                <Dropdown.Option>Cryto</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label>Short Description *</Label>
          <Textarea
            control={control}
            name="short_description"
            placeholder="Write a short description..."
          />
        </FormGroup>
        <FormGroup>
          <Label>Story *</Label>
          <ReactQuill
            theme="snow"
            modules={modules}
            value={content}
            onChange={setContent}
            placeholder="Write your story"
          />
        </FormGroup>

        <FormRow>
          <FormGroup>
            <Label>Goal *</Label>
            <Input control={control} name="goal" placeholder="$0.00 USD" />
          </FormGroup>
          <FormGroup>
            <Label>Raised amount *</Label>
            <Input control={control} name="amount" placeholder="$0.00 USD" />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <Label>Amount Prefilled</Label>
            <Input control={control} name="prefilled" placeholder="Amount Prefilled" />
            <p className="text-sm text-left text-text3">
              It will help fill amount box by click, place each amount by comma, ex: 10,20,30,40
            </p>
          </FormGroup>
          <FormGroup>
            <Label>Video</Label>
            <Input control={control} name="video" placeholder="Video" />
            <p className="text-sm text-left text-text3">Place Youtube or Vimeo Video URL</p>
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <Label>Campaign End Method</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select one" />
              <Dropdown.List>
                <Dropdown.Option>Architecture</Dropdown.Option>
                <Dropdown.Option>Cryto</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
          <FormGroup>
            <Label>Counrty</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select country" />
              <Dropdown.List>
                <Dropdown.Option>Architecture</Dropdown.Option>
                <Dropdown.Option>Cryto</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <Label>Start Date</Label>
            <Input control={control} name="start_date" placeholder="Start Date" />
          </FormGroup>
          <FormGroup>
            <Label>End Date</Label>
            <Input control={control} name="end_date" placeholder="End Date" />
          </FormGroup>
        </FormRow>

        <div className="text-center mt-10">
          <Button type="submit" kind="primary" className="mx-auto">
            Submit new campaign
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CampaignAddNew;
