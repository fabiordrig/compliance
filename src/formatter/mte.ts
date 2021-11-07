import { MteRawData } from "../crawler/mte/mte";

export class MteFormatter {
  format(rawData: MteRawData[], identityNumber: string): MteData[] {
    const formattedData =  rawData.filter((data) => data.cpf === identityNumber).map((raw) => {
      return {
        year: raw.ano,
        location: raw.local,
      }
    });

    return formattedData;
  }
}


export type MteData = {
  year: number;
  location: string;
}
