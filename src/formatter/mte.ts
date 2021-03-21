import fs from 'fs'
import path from 'path'


export class MteFormatter {
  private readonly encoding = 'utf-8'
  readFile() {
    const filePath = path.resolve(__dirname, '../crawler/mte/mte.pdf')
    console.log(filePath);
    const content = fs.readFileSync(filePath, this.encoding);
    console.log('====================================');
    console.log(content);
    console.log('====================================');
  }
}
