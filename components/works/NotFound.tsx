import { useStore } from '@/app/store';

export default function NotFound({
  filters,
  handleReset,
}: {
  filters: string[];
  handleReset: () => void;
}) {
  const language = useStore((state) => state.language);
  const theme = useStore((state) => state.theme);

  return (
    <div className=" mx-[24px] md:mx-[103px] pt-[30px] flex justify-center flex-col items-center">
      <h2 className="text-[32px] uppercase font-bold tracking-[1.92px]">
        {language === 'en' ? 'Ooops' : 'Uuups'} 😥
      </h2>
      <p className="max-w-[300px] text-center mt-[20px] font-medium tracking-[0.92px]">
        {language === 'en'
          ? 'I currently do not have any projects that meet the following criteria:'
          : 'Jeg har i øjeblikket ingen projekter, der opfylder følgende kriterier:'}
      </p>
      <div className="flex flex-wrap gap-[12px] max-w-[350px] justify-center py-[30px]">
        {filters.map((filter) => (
          <div
            key={filter}
            className={`text-[12px] tracking-[0.72px] uppercase font-bold rounded-full py-[10px] px-[22px] ${
              theme === 'light'
                ? 'bg-primary-light text-white'
                : 'bg-primary-dark text-near-black'
            }`}
          >
            {filter}
          </div>
        ))}
      </div>
      <h3
        className="tracking-[0.96px] uppercase font-bold cursor-pointer hover:underline pt-[15px]"
        onClick={handleReset}
      >
        {language === 'en' ? 'Clear Filters' : 'Ryd Filtre'}
      </h3>
    </div>
  );
}
