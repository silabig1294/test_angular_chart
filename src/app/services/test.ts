// export interface Test {
// }
export interface LastYear {
    year: string;
    month: string;
    account_count: number;
}

export interface YearBack {
    year: string;
    account_count: number;
}

export interface RootObject {
    last_year: LastYear[];
    status: string;
    year_back: YearBack[];
}

export interface Body {
    year_back: string;
}