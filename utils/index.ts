import type { IPopulation, IPopulationData } from "~/types/population";
import type { Feature, GeoJsonObject, Polygon, MultiPolygon } from 'geojson';
import type { ILocation } from "~/types/common";

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

const convertCoordinates = (coordinates: number[][][]) => {
    return coordinates[0].map((coord: number[]) => ({
        lat: coord[1],
        lng: coord[0],
    }));
};

export const loadPolygonsFromGeoJson = async (POPULATION_DATA:IPopulation,geojson:GeoJsonObject) => {
    let polygons=[] ;
    if (geojson && (geojson as any).features) {
        polygons = (geojson as any).features.flatMap((feature: Feature) => {
            const properties = feature.properties;
            const geometry = feature.geometry;

            if (geometry.type === 'Polygon') {
                return [{
                    id: properties ? properties.NAME_1 : '',
                    latLngs: convertCoordinates((geometry as Polygon).coordinates),
                    options: {
                        color: 'white',
                        weight: 2,
                        fillColor: getColorFromDensity(getDensityFromState(properties?.NAME_1, POPULATION_DATA)),
                        fillOpacity: 0.7,
                        dashArray: '3',
                    },
                    name: properties ? properties.NAME_1 : '',
                }];
            } else if (geometry.type === 'MultiPolygon') {
                return (geometry as MultiPolygon).coordinates.map(coords => ({
                    id: properties ? properties.NAME_1 : '',
                    latLngs: convertCoordinates(coords),
                    options: {
                        color: 'white',
                        weight: 2,
                        fillColor: getColorFromDensity(getDensityFromState(properties?.NAME_1, POPULATION_DATA)),
                        fillOpacity: 0.7,
                        dashArray: '3',
                    },
                    name: properties ? properties.NAME_1 : '',
                }));
            } else {
                return [];
            }
        });
        return polygons
    }
};

export function calculateDistance(loc1: ILocation, loc2: ILocation) {
    const R = 6371; // Radius of the Earth in km
    const dLat = (loc2.lat - loc1.lat) * Math.PI / 180;
    const dLon = (loc2.lng - loc1.lng) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(loc1.lat * Math.PI / 180) * Math.cos(loc2.lat * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
}