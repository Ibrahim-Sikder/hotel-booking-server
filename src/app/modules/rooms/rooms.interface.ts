export type TRoom = {
  title: string;
  price: number;
  maxPeople: number;
  desc: string;
  roomNumbers: {
    number: number;
    unavailableDates: Date[];
  }[];
  createdAt?: Date;
  updatedAt?: Date;
};
