import { createWriteStream } from 'fs'
import axios, { AxiosResponse } from 'axios'
import path from 'path'

export class Mte {
  private readonly outputFile = 'mte.pdf'
  constructor(private readonly url: string) {}


  async download(): Promise<Blob> {

    const response: AxiosResponse<any> = await axios.get(this.url, {
      responseType: 'stream',
    })

    const file = createWriteStream(path.resolve(__dirname,  this.outputFile))

    response.data.pipe(file)

    return new Promise((resolve, reject) => {
      file.on('finish', resolve)
      file.on('error', reject)
    })
  }
}
