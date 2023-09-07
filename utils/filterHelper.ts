import { Catagory, ProjectType } from '@/types';

export function filterHelper(
  filter: string,
  handleRemove: (filter: string) => void,
  filters: string[]
) {
  if (
    filter === ProjectType.DesignDevelopment &&
    filters.includes(ProjectType.Development)
  ) {
    handleRemove(ProjectType.Development);
  }

  if (
    filter === ProjectType.Development &&
    filters.includes(ProjectType.DesignDevelopment)
  ) {
    handleRemove(ProjectType.DesignDevelopment);
  }

  if (filter === Catagory.Frontend && filters.includes(Catagory.Fullstack)) {
    handleRemove(Catagory.Fullstack);
  }

  if (filter === Catagory.Fullstack && filters.includes(Catagory.Frontend)) {
    handleRemove(Catagory.Frontend);
  }
}
