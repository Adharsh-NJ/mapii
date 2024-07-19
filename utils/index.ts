import type { ILocation } from "~/types/common";
import type { IPopulation, IPopulationData } from "~/types/population";

export function getColorFromDensity(d: number): string {
    return d > 1000 ? '#800026' :
        d > 500 ? '#BD0026' :
            d > 200 ? '#E31A1C' :
                d > 100 ? '#FC4E2A' :
                    d > 50 ? '#FD8D3C' :
                        d > 20 ? '#FEB24C' :
                            d > 10 ? '#FED976' :
                                '#FFEDA0';
}

export function getDensityFromState(state: string,data:IPopulation): number {
    if (data[state]) {
        return data[state].populationDensity;
    }
    return 0;
}

export function getPopulationData(state: string,POPULATION_DATA:IPopulation): IPopulationData | undefined {
    if (POPULATION_DATA[state]) {
        return {
            state,
            ...POPULATION_DATA[state]
        };
    }
    return undefined;
}

export const getLocation = () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    resolve({
                        lat: position.coords.latitude,
                        long: position.coords.longitude
                    });
                },
                error => {
                    console.error(error);
                    resolve({ lat: null, long: null });
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
            resolve({ lat: null, long: null });
        }
    });
};