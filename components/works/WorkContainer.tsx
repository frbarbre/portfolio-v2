'use client';

import Projects from '../shared/Projects';
import Heading from '../shared/Heading';
import SquareButton from '../shared/SquareButton';
import { Fragment, useEffect, useState } from 'react';
import Magnetic from '../shared/Magnetic';
import { Catagory, FilterSearchParams, Project, ProjectType } from '@/types';
import Filter from './Filter';
import { filterHelper } from '@/utils/filterHelper';
import FilterTag from './FilterTag';
import { AnimatePresence } from 'framer-motion';
import { skills } from '@/constants';
import NotFound from './NotFound';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import BackButton from '../work/BackButton';

export default function WorksContainer({
  projects,
  isArchive,
  searchParams,
}: {
  projects: Project[];
  isArchive?: boolean;
  searchParams?: FilterSearchParams;
}) {
  const searchParameters = useSearchParams();
  const filterParams = searchParameters.getAll('filter');

  const router = useRouter();
  const pathname = usePathname();
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [filters, setFilters] = useState<string[]>(filterParams || []);

  const allFilters = [
    Catagory.Frontend,
    Catagory.Fullstack,
    ProjectType.DesignDevelopment,
    ProjectType.Development,
    ...skills.map((skill) => skill.id),
  ];

  useEffect(() => {
    if (!pathname.includes('/archive')) {
      setFilters([]);
    }
  }, []);

  useEffect(() => {
    if (pathname.includes('/archive')) {
      const filterString = filters
        .map((filter) => `filter=${filter}`)
        .join('&');
      router.push(`?${filterString}`);
    }
  }, [filters, router]);

  function handleAdd(filter: string) {
    const isFilterActive = filters.find((data) => data === filter);
    if (!isFilterActive) {
      filterHelper(filter, handleRemove, filters);
      setFilters((prevFilters) => [...prevFilters, filter]);
    } else {
      handleRemove(filter);
    }
  }

  function handleRemove(option: string) {
    setFilters((prevFilter) =>
      prevFilter.filter((filter) => filter !== option)
    );
  }

  function handleReset() {
    setFilters([]);
  }

  let filteredProjects = projects.filter((project) =>
    filters.every(
      (catagory) =>
        Object.values(project.acf).includes(catagory) ||
        Object.values(project.acf.tools).includes(catagory)
    )
  );

  return (
    <>
      <section className="flex justify-between items-center gap-[12px] flex-wrap mt-[50px] mb-[20px] mx-[24px] md:mt-[100px] md:mb-[32px] md:mx-[103px] relative">
        <article className='flex gap-8 items-center'>
          {pathname.includes('/archive') && <BackButton />}
          <Heading
            daText={isArchive ? 'Arkiv' : 'Projekter'}
            enText={isArchive ? 'Archive' : 'Works'}
            isFlex
          />
        </article>
        {isArchive && (
          <div
            className="w-full max-w-[130px] md:max-w-[188px] cursor-pointer z-10 relative"
            onClick={() => setIsFilterActive(!isFilterActive)}
          >
            <div className="lg:hidden w-full">
              <SquareButton daText="Filter" enText="Filter" variant="icon" />
            </div>
            <div className="hidden lg:block w-full translate-x-[12px]">
              <Magnetic>
                <SquareButton daText="Filter" enText="Filter" variant="icon" />
              </Magnetic>
            </div>
          </div>
        )}
        <Filter
          searchParams={searchParams}
          isFilterActive={isFilterActive}
          setIsFilterActive={setIsFilterActive}
          filters={filters}
          handleAdd={handleAdd}
          handleReset={handleReset}
        />
      </section>
      <div className="min-h-[42.8px] md:mb-[32px] mb-[20px] flex gap-[12px] lg:gap-sm mx-[24px] md:mx-[103px] flex-wrap">
        {allFilters.map((filter) => (
          <Fragment key={filter}>
            <AnimatePresence>
              {filters.includes(filter) && (
                <>
                  {filters.length > 0 && (
                    <>
                      <div className="hidden lg:block">
                        <Magnetic padding="false">
                          <FilterTag
                            name={filter}
                            handleRemove={handleRemove}
                          />
                        </Magnetic>
                      </div>
                      <div className="lg:hidden">
                        <FilterTag name={filter} handleRemove={handleRemove} />
                      </div>
                    </>
                  )}
                </>
              )}
            </AnimatePresence>
          </Fragment>
        ))}
      </div>
      <article className="mb-[100px]">
        {filteredProjects.length > 0 ? (
          <Projects projects={filteredProjects} />
        ) : (
          <NotFound filters={filters} handleReset={handleReset} />
        )}
      </article>
    </>
  );
}
