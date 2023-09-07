import { useStore } from '@/app/store';
import { filtersData } from '@/constants';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import FilterChoice from './FilterChoice';

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
        <>
          <article
            className={`fixed md:absolute inset-0 md:inset-auto md:top-[120px] z-40 md:left-0 md:right-0 ${
              theme === 'light'
                ? 'md:border-black/20 bg-white/60'
                : 'md:border-white/20 bg-near-black/60'
            } backdrop-blur-[15px] md:border-[3px] rounded-[5px] md:rounded-[10px] mt-[77px] md:mt-0`}
          >
            <div className="overflow-y-scroll md:overflow-y-visible h-full flex flex-col lg:grid lg:grid-cols-filters md:gap-x-[40px] gap-y-[20px] md:gap-y-[30px] lg:gap-x-[108px] p-[24px] md:p-[46px]">
              {filtersData.map((filter, masterIndex) => (
                <div
                  key={masterIndex}
                  className={`flex flex-col gap-[12px] lg:gap-[40px]`}
                >
                  <h2
                    className={`${
                      theme === 'light'
                        ? 'text-primary-light'
                        : 'text-primary-dark'
                    } font-bold uppercase text-[16px] tracking-[0.96px] md:text-[22px] md:tracking-[1.32px]`}
                  >
                    {language === 'en' ? filter.title.en : filter.title.da}
                  </h2>
                  <article className="flex gap-[20px] lg:gap-y-[40px] flex-col flex-wrap md:max-h-[332px]">
                    {filter.choices.map((choice) => (
                      <FilterChoice
                        daText={choice.da}
                        enText={choice.en}
                        id={choice.id}
                        filters={filters}
                        handleAdd={handleAdd}
                        isRadio={masterIndex !== 2}
                        key={choice.id}
                      />
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
          <div
            className="fixed inset-0"
            onClick={() => setIsFilterActive(false)}
          />
        </>
      )}
    </>
  );
}
