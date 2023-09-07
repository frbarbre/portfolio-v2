'use client';

import Projects from '../shared/Projects';
import Heading from '../shared/Heading';
import SquareButton from '../shared/SquareButton';
import { Fragment, useState } from 'react';
import Magnetic from '../shared/Magnetic';
import { Catagory, Project, ProjectType } from '@/types';
import Filter from './Filter';
import { filterHelper } from '@/utils/filterHelper';
import FilterTag from './FilterTag';
import { AnimatePresence } from 'framer-motion';

export default function WorksContainer({ projects }: { projects: Project[] }) {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [filters, setFilters] = useState<string[]>([]);

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

  const filteredProjects = projects.filter((project) =>
    filters.every(
      (catagory) =>
        Object.values(project.acf).includes(catagory) ||
        Object.values(project.acf.tools).includes(catagory)
    )
  );

  return (
    <>
      <section className="flex justify-between items-center gap-[12px] flex-wrap mt-[50px] mb-[20px] mx-[24px] md:mt-[100px] md:mb-[32px] md:mx-[103px] relative">
        <Heading daText="Projekter" enText="Works" isFlex />

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
        <Filter
          isFilterActive={isFilterActive}
          setIsFilterActive={setIsFilterActive}
          filters={filters}
          handleAdd={handleAdd}
          handleReset={handleReset}
        />
      </section>
      <div className="min-h-[42.8px] md:mb-[32px] mb-[20px] flex gap-[12px] lg:gap-[0px] mx-[24px] md:mx-[103px] flex-wrap">
        <AnimatePresence>
          {filters.length !== 0 && (
            <>
              {filters.map((filter) => (
                <Fragment key={filter}>
                  <Fragment>
                    <div className="hidden lg:block">
                      <Magnetic>
                        <FilterTag
                          filters={filters}
                          name={filter}
                          handleRemove={handleRemove}
                        />
                      </Magnetic>
                    </div>
                    <div className="lg:hidden">
                      <FilterTag
                        filters={filters}
                        name={filter}
                        handleRemove={handleRemove}
                      />
                    </div>
                  </Fragment>
                </Fragment>
              ))}
            </>
          )}
        </AnimatePresence>
      </div>
      <article className="mb-[100px]">
        <Projects projects={filteredProjects} />
      </article>
    </>
  );
}
