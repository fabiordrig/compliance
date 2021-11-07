import { createWriteStream, readFileSync} from 'fs'
import axios, { AxiosResponse } from 'axios'
import path from 'path'

export class Mte {
  private readonly outputFile = 'mte.pdf'
  constructor(private readonly url: string) {}


  async download(): Promise<MteRawData> {

    const response: AxiosResponse<any> = await axios.get(this.url, {
      responseType: 'stream',
    })

    const file = createWriteStream(path.resolve(__dirname,  this.outputFile))

    response.data.pipe(file)

    const rawdata: any = readFileSync(this.outputFile);
    return JSON.parse(rawdata);
  }
}

export type MteRawData = {
  id: number;
  ano: number;
  estado: string;
  nome: string;
  cpf: string;
  local: string;
}
