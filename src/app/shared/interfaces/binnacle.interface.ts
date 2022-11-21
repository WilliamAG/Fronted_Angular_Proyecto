export interface Binnacle{
    logId: number,
    dateEvent: string,
    hourEvent: string,
    userId: number,
    eventTypeId: number,
    modifiedTableId: number
}
export interface Filter{
    eventTypeId:number,
    modifiedTableId:number,
    eventDate: string
  }
