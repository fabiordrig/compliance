import { createWriteStream, readFileSync } from 'fs'
import axios, { AxiosResponse } from 'axios'
import path from 'path'

export class Ibama {
  private readonly outputFile = 'ibama.json'
  constructor(private readonly url: string) {}


  async download(): Promise<IbamaRawData> {

    const response: AxiosResponse<any> = await axios.get(this.url, {
      responseType: 'stream',
    })

    const file = createWriteStream(path.resolve(__dirname,  this.outputFile))

    response.data.pipe(file)

    const rawdata: any = readFileSync(this.outputFile);
    return JSON.parse(rawdata);

  }
}



export type IbamaRawData = {
  field1: string;
  field2?: string;
  field3?: string;
  field4?: string;
  field5: string;
  field6: string;
  field7: string;
  field8: string;
  field9: string;
}
