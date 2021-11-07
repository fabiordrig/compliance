import { IbamaRawData } from "../crawler/ibama/ibama";



export class IBamaFormatter {
  format(rawData: IbamaRawData[], identityNumber: string): IbamaData[] {
    const formattedData =  rawData.filter((data) => data.field6 === identityNumber).map((raw) => {
      return {
        municipality: raw.field9,
        state: raw.field8,
        processNumber: raw.field1,
        description: raw.field7,
      }
    });

    return formattedData;
  }
}


export type IbamaData = {
  readonly municipality: string;
  readonly state: string;
  readonly processNumber?: string;
  readonly description?: string;
}
