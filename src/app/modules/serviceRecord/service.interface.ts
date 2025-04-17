
export interface IServiceRecord {
    bikeId: string;
    serviceDate: Date;
    completionDate?: Date | null;
    description: string;
    status: string;
}