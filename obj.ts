/*
 * src      : obj.ts
 * job      : generic TypeScript object
 * git      : https://github.com/pffy/hanyupinyin-ts
 * author   : The Pffy Authors https://pffy.dev
 * license  : https://opensource.org/licenses/MIT
 */

import { IdxHanyuPinyin as idxhp } from "hpdx-ts";

export class HanyuPinyin {
  
  private input: string = '';
  private text: string = '';
  
  setInput(str: string): HanyuPinyin {
    this.input = str;
    this.text = str;
    this.convert();
    return this;
  }
  
  private convert(): void {
    for (let h in idxhp.hpdx) {
      this.text = this.text.replace((new RegExp(h, 'g')), ' ' + idxhp.hpdx[h] + ' ');
    }
  
    this.text = this.text.replace((new RegExp('[^\\S\\n]{2,}', 'g')), ' ').trim();
  }
  
  toString(): string {
    return this.text;
  }
}
