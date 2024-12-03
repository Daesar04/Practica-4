import { ObjectId } from "mongodb";
import { VehicleModel, PartModel, Vehicle, Part } from "./types.ts";

export const modelToVehicle = (model: VehicleModel): Vehicle => ({
  id: model._id!.toString(),
  name: model.name,
  manufacturer: model.manufacturer,
  year: model.year,
  joke: "", // This will be added dynamically
  parts: [],
});

export const modelToPart = (model: PartModel): Part => ({
  id: model._id!.toString(),
  name: model.name,
  price: model.price,
  vehicleId: model.vehicleId,
});