import { createSelector } from "reselect";
import { IRootAppStae } from "../../../typings";

const selectHomePage = (state: IRootAppStae) => state.homePage;

export const makeSelectTopCars = createSelector(selectHomePage, (homePage)=> homePage.topCars);