export default interface Task {
  id: number;
  title: string;
  status: 'pending' | 'in-progress' | 'completed' | 'skipped';
  initialStartDate:Date,
  dueDate: Date;
  doseCompletedDate:Date,
  mealStatus:'before meal' | 'after meal' | 'Not Specific' | 'skipped';
  description: string;
  formOfDose:String
}
