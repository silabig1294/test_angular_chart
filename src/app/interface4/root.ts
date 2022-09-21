import { Yearback } from "./yearback";
import { Lastyear } from "./lastyear";


export interface Root {
    last_year: Lastyear[];
    status: string;
    year_back: Yearback[];
}
