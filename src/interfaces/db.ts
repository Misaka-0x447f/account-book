export const container = "account-book-container";

export const blobs: Array<keyof Database> = ["asset", "consumable"];

interface Activity<T> {
  entry: T[];
  category: Category;
}

export interface Entry {
  label: string;
  value: number;
  timestamp: number;  // UNIX Time Stamp
  note?: string;
  category?: string;
}

interface Category {
  [T: string]: {
    label: string
  };
}

export interface Database {
  asset: Activity<Entry>;
  consumable: Activity<Entry>;
}

