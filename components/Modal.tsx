import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { closeModal } from '@/redux/UISlice';
import { cleanListToCreate, createListAsync } from '@/redux/listsSlice';
import { RootState } from '@/redux/store';
import Button from './Button';
import Icon from './Icon';

import useBrowserModal from '@/lib/hooks/useBrowserModal';

export default function Modal() {
  const dispatch = useAppDispatch();
  const isBrowser = useBrowserModal();

  const modalUIState = useAppSelector((state: RootState) => state.UI.modal);

  const handleCloseClick = () => {
    dispatch(closeModal());
  };
  const handleListCompletedCreation = async (e: React.MouseEvent) => {
    await dispatch(createListAsync('cancel'));
    dispatch(cleanListToCreate());
    dispatch(closeModal());
  };

  const modalJSX = modalUIState.isVisible ? (
    <div
      className="fixed inset-0 z-50 bg-custom-overlay-opacity"
      onClick={() => handleCloseClick()}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-50 mx-auto mt-44   max-w-[500px]   rounded-[30px] bg-white   p-9 text-center  opacity-100"
      >
        <div
          onClick={() => handleCloseClick()}
          className="absolute right-9 top-5 cursor-pointer"
        >
          <Icon icon="close" />
        </div>
        <div className="text-left">
          <p className="mb-14 mr-10 text-2xl leading-[30px]">
            Are you sure that you want to cancel this list?
          </p>
        </div>
        <div className=" mb-0 mt-auto flex justify-end">
          <Button
            onClickFunc={handleCloseClick}
            customClasses="font-bold text-base px-6 py-5 bg-transparent border-0"
          >
            cancel
          </Button>
          <Button
            onClickFunc={handleListCompletedCreation}
            customClasses="bg-danger font-bold text-base px-6 py-5 text-white rounded-xl"
          >
            Yes
          </Button>
        </div>
      </div>
    </div>
  ) : null;
  if (isBrowser) {
    return ReactDOM.createPortal(
      modalJSX,
      document.getElementById('modal-root')!
    );
  } else return null;
}
