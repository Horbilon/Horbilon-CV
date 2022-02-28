export class Entry {
  constructor(public type: string, public institution: string, public local: string, public title: string, public startDate: number, public endDate: number, public description: Array<string>, ) {
  }
}
