export interface ILocation {
    city: string;
    country: string;
    temp: number;
    icon: string;
}

export interface IForecast {
    location: {
        name: string,
        region: string,
        country: string,
        lat: string,
        lon: string
        tz_id: string,
        localtime_epoch: number,
        localtime: string
    },
    current: {
        last_updated_epoch: number,
        last_updated: string,
        temp_c: number,
        temp_f: number,
        is_day: number,
        condition: {
            text: string,
            icon: string,
            code: number
        },
        wind_mph: number,
        wind_kph: number,
        wind_degree: number,
        wind_dir: string,
        pressure_mb: number,
        pressure_in: number,
        precip_mm: number,
        precip_in: number,
        humidity: number
        cloud: number
        feelslike_c:  number,
        feelslike_f:  number
        vis_km: number
        vis_miles: number
        uv: number
        gust_mph: number,
        gust_kph: number
        air_quality: {
            co: number,
            no2: number,
            o3: number,
            so2: number,
            pm2_5: number,
            pm10: number,
            'us-epa-index': number,
            "gb-defra-index": number
        }
    }
}

export interface IAirQuality {
    co: number,
    no2: number,
    o3: number,
    so2: number,
    pm2_5: number,
    pm10: number,
    'us-epa-index': number,
    "gb-defra-index": number
}

export interface IAstroInfo {
    astronomy: {
        astro: {
            sunrise: string,
            sunset: string,
            moonrise: string,
            moonset: string,
            moon_phase: string,
            moon_illumination: string
        }
	}
}

export interface IAirQuality {
    air_quality: {
        co: number,
        no2: number,
        o3: number,
        so2: number,
        pm2_5: number,
        pm10: number,
        'us-epa-index': number,
        "gb-defra-index": number
    }
}

export interface IAstroInfo {
    astro: {
        sunrise: string,
        sunset: string,
        moonrise: string,
        moonset: string,
        moon_phase: string,
        moon_illumination: string
    }
}


export interface ISport {
    football: [
        {
            stadium: string,
            country: string,
            region: string,
            tournament: string,
            start: string,
            match: string
        },
    ],
    cricket: [
        {
            stadium: string,
            country: string,
            region: string,
            tournament: string,
            start: string,
            match: string
        }
    ],
    golf: [
        {
            stadium: string,
            country: string,
            region: string,
            tournament: string,
            start: string,
            match: string
        }
    ]
}

export interface IFootball {
    football: [
        {
            stadium: string,
            country: string,
            region: string,
            tournament: string,
            start: string,
            match: string
        }
    ]
}

export interface ICountry {
    name: {
        common: string
        official: string
    },
    currencies: {
            name: string
            symbol: string
    },
    sufix: {
        root: string
        sufixes: string
    }
    capital: string
    borders: string[]
    area: number
    maps: {
        openStreetMaps: string
    },
    population: number
    timezones: string
    continent: string
    flag: string
}

export interface IHours {
    hour: [
        {
            time_epoch: string,
            time: string,
            temp_c: number,
            temp_f: number,
            is_day: number,
            condition: {
                text: string,
                icon: string,
                code: string
            },
            wind_mph: number,
            wind_kph: number,
            wind_degree: number,
            wind_dir: string,
            pressure_mb: number,
            pressure_in: number,
            precip_mm: number,
            precip_in: number,
            humidity:number,
            cloud: number,
            feelslike_c: number,
            feelslike_f: number,
            windchill_c: number,
            windchill_f: number,
            heatindex_c: number,
            heatindex_f: number,
            dewpoint_c: number,
            dewpoint_f: number,
            will_it_rain: number,
            chance_of_rain: number,
            will_it_snow: number,
            chance_of_snow: number,
            vis_km: number,
            vis_miles:number,
            gust_mph: number,
            gust_kph: number,
            uv: number
        },
    ]
}