import { useStore } from '@/app/store';
import { ErrorType } from '@/types';
import { Parser } from 'html-to-react';
import { useState } from 'react';

interface Props {
  isTextarea?: boolean;
  value: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  name: string;
  placeholder: string;
  errors: ErrorType[];
  label: string;
}

export default function Input({
  isTextarea,
  value,
  handleChange,
  name,
  placeholder,
  errors,
  label,
}: Props) {
  // @ts-ignore
  const htmlParser = new Parser();
  const isErrored = errors.find((error) => error.name === name);
  const theme = useStore((state) => state.theme);
  const language = useStore((state) => state.language);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col gap-[15px] md:gap-[20px] relative">
      <label
        htmlFor={name}
        className="text-[14px] tracking-[0.84px] font-semibold uppercase md:text-[24px] md:tracking-[1.44px]"
      >
        {htmlParser.parse(label)}
      </label>
      {isTextarea ? (
        <div
          className={`${
            theme === 'light'
              ? `bg-white text-near-black ${
                  isFocused ? 'border-primary-light' : 'border-black/20'
                }`
              : `bg-near-black text-white ${
                  isFocused ? 'border-primary-dark' : 'border-white/20'
                }`
          } p-[10px] md:pl-[20px] md:pt-[17px] rounded-[5px] md:rounded-[10px] border-[2px] transition-colors`}
        >
          <textarea
            value={value}
            onChange={handleChange}
            name={name}
            placeholder={placeholder}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`${
              theme === 'light' ? 'bg-white' : 'bg-near-black'
            } resize-y min-h-[222px] w-full h-full md:min-h-[330px] transition-colors outline-none text-[14px] tracking-[0.84px] font-normal md:text-[18px] md:tracking-[1.08px]`}
          />
        </div>
      ) : (
        <input
          value={value}
          onChange={handleChange}
          name={name}
          placeholder={placeholder}
          className={`${
            theme === 'light'
              ? 'border-black/20 bg-white text-near-black focus:border-primary-light'
              : 'border-white/20 bg-near-black text-white focus:border-primary-dark'
          } transition-colors border-[2px] outline-none p-[10px] md:px-[20px] md:py-[17px] rounded-[5px] md:rounded-[10px] text-[14px] tracking-[0.84px] font-normal md:text-[18px] md:tracking-[1.08px]`}
        />
      )}
      {isErrored && (
        <p className="text-red-600 text-[12px] tracking-[0.72px] absolute right-0 top-0 md:top-[8px] uppercase">
          {language === 'en' ? isErrored.message.en : isErrored.message.da}
        </p>
      )}
    </div>
  );
}
