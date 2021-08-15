import { GetCars_cars } from "../../services/carService/__generated__/GetCars";

//defines what the home page could have as a state on its own slice/reducer
export interface IHomePageState{
    topCars : GetCars_cars[];

}