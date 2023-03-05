import 'react-quill/dist/quill.snow.css';

import { Button, FormGroup, FormRow, ImageUpload, Input, Label, Textarea } from 'components';
import React, { useEffect, useMemo, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import { baseURL, imgbbAPI } from 'config/config';

import DatePicker from 'react-date-picker';
import { Dropdown } from 'components/dropdown';
import ImageUploader from 'quill-image-uploader';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import useOnChange from 'hooks/useOnChange';

Quill.register('modules/imageUploader', ImageUploader);

const categoriesData = ['Architecture', 'Education'];

const CampaignAddNew = () => {
  const [content, setContent] = useState('');
  const { handleSubmit, control, setValue, watch, reset } = useForm();
  const resetValues = () => {
    setStartDate('');
    setEndDate('');
    reset({});
  };
  const getDropdownLabel = (name, defaultValue = '') => {
    const value = watch(name) || defaultValue;
    return value;
  };
  const handleAddNewCampaign = async (values) => {
    try {
      await axios.post(`${baseURL}/campaigns`, {
        ...values,
        content,
        startDate,
        endDate,
      });
      console.log('🚀 ~ file: CampaignAddNew.jsx:10 ~ handleAddNewCampaign ~ values:', values);
      toast.success(`New campaign created successfully`);
      resetValues();
    } catch (error) {
      toast.error(`Can not create new campaign`);
    }
  };
  const handleSelectDropdownOption = (name, value) => {
    setValue(name, value);
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
        upload: async (file) => {
          const bodyFormData = new FormData();
          bodyFormData.append('image', file);
          const response = await axios({
            method: 'post',
            url: `${imgbbAPI}`,
            data: bodyFormData,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          return response.data.data.url;
        },
      },
    }),
    []
  );

  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useOnChange(500);
  useEffect(() => {
    if (!filterCountries) return;
    const fetchCountry = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${filterCountries}`);
        if (response && response.data) {
          setCountries(response.data);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchCountry();
  }, [filterCountries]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
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
              <Dropdown.Select placeholder={getDropdownLabel('category', 'Select category')} />
              <Dropdown.List>
                {categoriesData.map((category) => (
                  <Dropdown.Option
                    key={category}
                    onClick={() => handleSelectDropdownOption('category', category)}
                  >
                    <span className="capitalize">{category}</span>
                  </Dropdown.Option>
                ))}
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
            <Label>Featured Image</Label>
            <ImageUpload onChange={setValue} name="featured_image" />
          </FormGroup>
        </FormRow>

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
            <Label>Country</Label>
            <Dropdown>
              <Dropdown.Select placeholder={getDropdownLabel('country', 'Select country')} />
              <Dropdown.List>
                <Dropdown.Search placeholder="Search country" onChange={setFilterCountries} />
                {countries &&
                  countries.length > 0 &&
                  countries.map((country) => (
                    <Dropdown.Option
                      key={country?.name?.common}
                      onClick={() => handleSelectDropdownOption('country', country?.name?.common)}
                    >
                      {country.name.common}
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <Label>Start Date</Label>
            {/* <Input control={control} name="start_date" placeholder="Start Date" type="date" /> */}
            <DatePicker onChange={setStartDate} value={startDate} format="dd-MM-yyyy" />
          </FormGroup>
          <FormGroup>
            <Label>End Date</Label>
            {/* <Input control={control} name="end_date" placeholder="End Date" type="date" /> */}
            <DatePicker onChange={setEndDate} value={endDate} format="dd-MM-yyyy" />
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
