import { AppUpdateStatus } from '@interfaces';
import { FC } from 'react';

export const UpdateStatus: FC<{
  updateStatus: AppUpdateStatus;
}> = ({ updateStatus }) => {
  return (
    <div>
      <h3>Update status</h3>
      <p>{updateStatus}</p>
    </div>
  );
};
