import { FC } from 'react';

interface Props {
  msg: string;
}

export const Error: FC<Props> = ({ msg }) => {
  return (
    <div className='bg-red-800 text-white text-center uppercase font-bold mb-3 rounded p-3'>
      <p>{msg}</p>
    </div>
  );
};
