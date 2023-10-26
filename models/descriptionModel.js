import mongoose from "mongoose";

const descriptionSchema = new mongoose.Schema({
  ////main
  operatingSystem: {
    type: String,
  },
  camera: {
    type: String,
  },
  display: {
    type: String,
  },
  battery: {
    type: String,
  },
  ram: {
    type: String,
  },
  cpu: {
    type: String,
  },
  storage: {
    type: String,
  },
  /////////////////////////

  // accesories
  accessoriesColor: {
    type: String,
  },
  accessoriesType: {
    type: String,
  },
  accessoriesBrand: {
    type: String,
  },
  //////////////////////
});

const Description = mongoose.model("Description", descriptionSchema);

export default Description;
