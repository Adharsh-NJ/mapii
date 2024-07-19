
    export interface IPopulation {
        [key:string]: {
        population: number;
        area: number;
        populationDensity: number;
    };

    }

   export interface IPopulationData {
        state: string;
        population: number;
        area: number;
        populationDensity: number;
    }