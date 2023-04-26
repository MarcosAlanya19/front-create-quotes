import { FC } from 'react';
import { TextArea, TextAreaProps } from '../atom';

interface Props extends TextAreaProps {
  label: string;
}

export const TextAreaLabel: FC<Props> = ({ label, id,...props }) => {
  return (
    <div className='mb-5'>
      <label htmlFor={id} className='block text-gray-700 uppercase font-bold'>
        {label}
      </label>
      <TextArea id={id} {...props} />
    </div>
  );
};
