interface Activity<T> {
  entry: T[];
  category: Category[];
}

interface Entry {
  label: string;
  value: number;
  timestamp: number;  // UNIX Time Stamp
  note: string;
  category: Category["reference"];
}

interface Category {
  label: string;
  reference: string;
}

export interface Database {
  asset: Activity<Entry>;
  consumable: Activity<Entry>;
  config: {
    typeof: "account-book";   // check this, is not exist, then invalid
  };
}

