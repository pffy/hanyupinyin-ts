/*
 * src      : obj.ts
 * job      : generic TypeScript object
 * git      : https://github.com/pffy/obj-ts
 * author   : The Pffy Authors https://pffy.dev
 * license  : https://opensource.org/licenses/MIT
 */

interface Something {
  key: string,
  value: string
}

export class SomeObject {

  static readonly derp: Something = {
    key: 'hello',
    value: 'world'
  };
}
