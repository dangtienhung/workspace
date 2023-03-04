import { Button, IconClose } from 'components';

import { CampaignPerk } from 'modules/campaign/parts';
import Modal from 'react-modal';
import React from 'react';

const ModalBackProject = () => {
  return (
    <Modal
      isOpen={false}
      overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
      className="modal-content w-full max-w-[521px] bg-white rounded-2xl outline-none p-10 relative max-h-[90vh] overflow-y-auto scrooll-hidden"
    >
      <button className="absolute z-10 cursor-pointer right-5 top-5 text-text1 w-11 h-11 flex justify-center items-center">
        <IconClose />
      </button>
      <h2 className="font-bold text-[25px] mb-10 text-text1 text-center capitalize">
        Back this project
      </h2>
      <p className="mb-3 text-sm">Enter the contribute amount</p>
      <input
        type="text"
        placeholder="$10"
        name="amount"
        className="w-full px-5 py-3 text-lg font-medium border rounded border-strock"
      ></input>
      <p className="my-5 text-sm text-text3">Contribution are not associatied with perks</p>
      <Button type="button" kind="primary" className="w-full">
        Continue
      </Button>
      <div className="mt-[60px]"></div>
      <CampaignPerk showButton />
    </Modal>
  );
};

export default ModalBackProject;
