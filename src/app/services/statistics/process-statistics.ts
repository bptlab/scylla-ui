declare namespace ProcessStatistics {
    export interface Configuration {
        time_unit: string;
    }

    export interface Process {
        id: string;
        name: string;
        cost: Statistics;
        time: {
            flow_time: Statistics;
            effective: Statistics;
            waiting: Statistics;
            off_timetable: Statistics;
        };
        instances: ProcessInstance[];
        resources: Resource[];
        activities: Activity[];
    }

    export interface ProcessInstance {
        id: number;
        cost: number;
        time: {
            flow_time: number;
            effective: number;
            waiting: number;
            off_timetable;
        };
        resources: Resource[]; // TODO: Check if neccessary
        activities: Activity[]; // TODO: Check if neccessary
    }

    export interface Resource {
        type: string;
        cost: Statistics;
        time: {
            in_use: Statistics;
            available: Statistics;
        };
        instances: ResourceInstance[];
    }

    export interface ResourceInstance {
        id: string;
        name: string;
        time: {
            in_use: number;
            available: number;
        };
        cost: number;
    }

    export interface Activity {
        id: string;
        name: string;
        cost: Statistics;
        time: {
            duration: Statistics;
            waiting: Statistics;
        };
        instances: ActivityInstance[];
    }

    export interface ActivityInstance {
        cost: number;
        time: {
            waiting: number;
            duration: number;
        };
    }

    export interface Statistics {
        min: number;
        max: number;
        median: number;
        avg: number;
        Q1: number;
        Q3: number;
        total: number;
    }
}
