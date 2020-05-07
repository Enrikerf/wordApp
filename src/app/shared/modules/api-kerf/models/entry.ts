import { Meaning } from "./meaning";
export interface Entry {
  word: string;
  results: Meaning[];
  pronunciation: any;
  frequency: number;
}
