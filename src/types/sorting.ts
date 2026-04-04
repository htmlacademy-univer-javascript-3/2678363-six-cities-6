export enum SortType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first'
}

export type SortOption = {
  type: SortType;
  label: string;
};

export type SortOptions = SortOption[];
