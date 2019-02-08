// an example of custom typings file with a vehicle
declare interface IVehicle {
    readonly Id: string;
    readonly Year: number;
    readonly MakeModel: string;
    readonly IsWorking: boolean;
    readonly Type: Vehicles;
}
