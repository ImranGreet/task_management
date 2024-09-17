export interface Duration {
  start: Date;
  end: Date;
  hours: number;
  medicineTime: 'before meal' | 'after meal' | 'not specific';
}
