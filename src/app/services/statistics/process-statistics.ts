declare namespace ProcessStatistics {

    export interface ResourceUtilization {
        configuration: Configuration;
        processes: Process [];
    }

    export interface Configuration {
        time_unit: string;
    }

    export interface Process {
        id: string;
        // name: string; not yet available
        cost: Statistics;
        time: {
            flow_time: Statistics;
            effective: Statistics;
            waiting: Statistics;
            off_timetable: Statistics;
        };
        instances: ProcessInstance[];
        activities: Activity[];
        resources: Resource[];
    }

    export interface ProcessInstance {
        // id: number; not yet available
        costs: number; // TODO: fix when #33 is done
        time: {
            duration: number; // TODO: fix when #33 is done
            effective: number;
            waiting: number;
            offTime: number; // TODO: fix when #33 is done
        };
        // resources?: Resource[];
        // activities?: Activity[];
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
        // name: string; not yet available
        cost: number;
        time: {
            in_use: number;
            available: number;
        };
    }

    export interface Activity {
        id: string;
        name: string;
        cost: Statistics;
        time: {
            duration: Statistics;
            waiting: Statistics;
            resources_idle: Statistics;
        };
        instances: ActivityInstance[];
    }

    export interface ActivityInstance {
        cost: number;
        time: {
            waiting: number;
            duration: number;
            resources_idle: number;
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
