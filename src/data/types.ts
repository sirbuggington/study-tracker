export interface TaskItem {
  id: string;
  text: string;
  subItems?: string[];
  link?: string;
  hours: number;
}

export interface DayData {
  id: string;
  dayNumber: number;
  date: string;
  weekday: string;
  title: string;
  subtitle: string;
  isRestDay: boolean;
  mustFinish: TaskItem[];
  niceToFinish: TaskItem[];
  endOfDayProof: string;
}

export interface WeekData {
  id: string;
  weekNumber: number;
  title: string;
  subtitle: string;
  days: DayData[];
}

export interface StudyPlan {
  title: string;
  goal: string;
  startDate: string;
  endDate: string;
  coreRules: string[];
  dailyQuestion: string;
  weeks: WeekData[];
  courseReference: CourseRef[];
  completionCriteria: string;
}

export interface CourseRef {
  number: number;
  name: string;
  hours: string;
  link: string;
}

export interface ProgressState {
  [taskId: string]: boolean;
}
