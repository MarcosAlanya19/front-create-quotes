import { FC } from 'react';

interface Props {
  type: 'submit';
  value: string;
}

export const Button: FC<Props> = ({ type, value }) => {
  return (
    <button
      type={type}
      className='bg-indigo-600 w-full p-3 text-white font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-colors'
    >
      {value}
    </button>
  );
};
