import { AppUpdate } from '@interfaces';
import { FC } from 'react';

export const UpdateStatus: FC<{
  updateState: AppUpdate;
}> = ({ updateState }) => {
  return (
    <div>
      <h3>Update status v2</h3>
      <p>{updateState.status}</p>
      <p>{updateState.message}</p>
    </div>
  );
};
