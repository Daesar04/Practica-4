import { OptionalId, ObjectId } from "mongodb";

export type VehicleModel = OptionalId<{
  name: string,
  manufacturer: string,
  year: number
  parts: ObjectId[]
}>;

export type PartModel = OptionalId<{
  name: string,
  price: number,
  vehicleId: ObjectId
}>;

export type Vehicle = {
  id: string,
  name: string,
  manufacturer: string,
  year: number,
  joke: string,
  parts: Part[]
};

export type Part = {
  id: string,
  name: string,
  price: number,
  vehicleId: string
};