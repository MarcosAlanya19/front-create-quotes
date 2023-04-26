import { FC } from 'react';
import { BaseInputProps, Input } from '../atom';

interface Props extends BaseInputProps {
  label: string;
}

export const InputLabel: FC<Props> = ({ label, id, ...inputProps }) => {
  return (
    <div className='mb-5'>
      <label htmlFor={id} className='block text-gray-700 uppercase font-bold'>
        {label}
      </label>
      <Input id={id} {...inputProps} />
    </div>
  );
};
