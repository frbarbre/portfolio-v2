import { Project } from "@/types";

export function sortArray(arr: Project[]) {
  arr.sort((a, b) => {
    if (a.acf.createdat < b.acf.createdat) {
      return 1;
    }
    if (a.acf.createdat > b.acf.createdat) {
      return -1;
    }
    return 0;
  });
}
