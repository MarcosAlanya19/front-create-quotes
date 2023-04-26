import { FC } from 'react';

export interface TextAreaProps {
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: FC<TextAreaProps> = ({
  id,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <textarea
      id={id}
      name={id}
      className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md resize-none'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
