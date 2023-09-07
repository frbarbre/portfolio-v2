'use client';

import Projects from '../shared/Projects';
import Heading from '../shared/Heading';
import SquareButton from '../shared/SquareButton';
import { useState } from 'react';
import Magnetic from '../shared/Magnetic';
import { Catagory, Project, ProjectType } from '@/types';
import Filter from './Filter';
import { filterHelper } from '@/utils/filterHelper';

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
      <section className="flex justify-between items-center mt-[50px] mb-[30px] mx-[24px] md:my-[100px] md:mx-[103px] relative">
        <Heading daText="Projekter" enText="Works" isFlex />

        <div
          className="w-full max-w-[130px] md:max-w-[188px] cursor-pointer"
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

      <article className="mb-[100px]">
        <Projects projects={filteredProjects} />
      </article>
    </>
  );
}
