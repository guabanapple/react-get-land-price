/* eslint-disable react/require-default-props */
import React from 'react';
import FormSet from '../Organisms/FormSet';
import ShowResult from '../Organisms/ShowResult';
import { UserInputs, ApiData } from '../../contains/types';

interface Props {
  userInputs: UserInputs;
  apiData?: ApiData;
  onSubmit: (userInputs: UserInputs) => void;
}

function Frame({ userInputs, apiData, onSubmit }: Props) {
  return (
    <div>
      <FormSet onSubmit={onSubmit} />
      {apiData !== undefined && <ShowResult userInputs={userInputs} apiData={apiData} />}
    </div>
  );
}

export default Frame;
