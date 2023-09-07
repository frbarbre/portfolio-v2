import { useStore } from '@/app/store';
import { filtersData } from '@/constants';
import { nanoid } from 'nanoid';
import Image from 'next/image';

export default function Filter({
  isFilterActive,
  setIsFilterActive,
  filters,
  handleAdd,
  handleReset,
}: {
  isFilterActive: boolean;
  setIsFilterActive: Function;
  filters: string[];
  handleAdd: (filter: string) => void;
  handleReset: () => void;
}) {
  const theme = useStore((state) => state.theme);
  const language = useStore((state) => state.language);

  return (
    <>
      {isFilterActive && (
        <article
          className={`fixed md:absolute inset-0 md:inset-auto md:top-[120px] z-40 md:left-0 md:right-0 md:max-h-[630px] ${
            theme === 'light'
              ? 'md:border-black/20 bg-white/60'
              : 'md:border-white/20 bg-near-black/60'
          } backdrop-blur-[15px] border-[3px] rounded-[5px] md:rounded-[10px] mt-[77px] md:mt-0`}
        >
          <div className="overflow-y-scroll md:overflow-y-visible h-full lg:grid lg:grid-cols-filters md:gap-x-[40px] lg:gap-x-[108px] p-[24px] md:p-[46px]">
            {filtersData.map((filter, index) => (
              <div key={nanoid()} className={``}>
                <h2
                  className={`${
                    theme === 'light'
                      ? 'text-primary-light'
                      : 'text-primary-dark'
                  } font-bold uppercase text-[16px] tracking-[0.96px] md:text-[22px] md:tracking-[1.32px]`}
                >
                  {language === 'en' ? filter.title.en : filter.title.da}
                </h2>
                <article className="flex gap-[40px] flex-col flex-wrap md:max-h-[332px]">
                  {filter.choices.map((choice) => (
                    <h2
                      key={nanoid()}
                      onClick={() => handleAdd(choice.id)}
                      className={`${
                        filters.includes(choice.id) && 'text-blue-500'
                      } w-max`}
                    >
                      {choice.da}
                    </h2>
                  ))}
                </article>
              </div>
            ))}
          </div>
          <Image
            src={theme === 'light' ? '/cross-light.svg' : '/cross-dark.svg'}
            alt="Close Button"
            width={20}
            height={20}
            className="absolute md:right-[52px] md:top-[52px] right-[24px] top-[24px] cursor-pointer"
            onClick={() => setIsFilterActive(false)}
          />
        </article>
      )}
    </>
  );
}
