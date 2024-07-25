
//change name
interface IData {
    population: number;
    area: number;
    populationDensity: number;
}

export interface IPopulation extends Record<string, IData> { };

export interface IPopulationData extends IData {
    state: string;
}