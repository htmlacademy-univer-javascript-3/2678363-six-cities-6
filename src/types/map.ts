export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type Locations = Location[];

export type City = {
  name: string;
  location: Location;
};

export type Cities = City[];

export type Point = {
  id: string | undefined;
  latitude: number;
  longitude: number;
};

export type Points = Point[];
