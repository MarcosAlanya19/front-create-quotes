import { FC } from 'react';

export interface BaseInputProps {
  id: string;
  placeholder?: string;
  type: 'text' | 'email' | 'date';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<BaseInputProps> = ({
  id,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      id={id}
      name={id}
      type={type}
      placeholder={placeholder}
      className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
      value={value}
      onChange={onChange}
    />
  );
};
