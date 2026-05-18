export type UserRole = 'STUDENT' | 'STAFF' | 'ADMIN';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
  phone?: string;
  department?: string;
  createdAt: string;
}
export interface Student extends User {
  role: 'STUDENT';
  matricNumber: string;
  programme: string;
  level: number;
  gpa: number;
  cgpa: number;
  status: 'active' | 'suspended' | 'graduated';
  enrolledCourses: string[];
  feeStatus: 'paid' | 'partial' | 'outstanding';
}
export interface Staff extends User {
  role: 'STAFF';
  staffId: string;
  designation: string;
  courses: string[];
  officeHours: string;
}
export interface Course {
  id: string;
  code: string;
  title: string;
  department: string;
  creditHours: number;
  semester: number;
  level: number;
  instructorId: string;
  instructorName: string;
  enrolledCount: number;
  capacity: number;
  schedule: string;
  description: string;
}
export interface Grade {
  courseId: string;
  courseCode: string;
  courseTitle: string;
  creditHours: number;
  score: number;
  grade: string;
  gradePoints: number;
  semester: string;
}
export interface Attendance {
  id: string;
  courseId: string;
  courseCode: string;
  courseTitle: string;
  date: string;
  status: 'present' | 'absent' | 'late';
  week: number;
}
export interface Exam {
  id: string;
  courseId: string;
  courseCode: string;
  courseTitle: string;
  type: 'CA' | 'MIDTERM' | 'FINAL';
  date: string;
  startTime: string;
  duration: number;
  venue: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}
export interface LibraryBook {
  id: string;
  title: string;
  author: string;
  isbn: string;
  department: string;
  year: number;
  available: boolean;
  coverUrl?: string;
  dueDate?: string;
}
export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar?: string;
  subject: string;
  body: string;
  date: string;
  read: boolean;
  type: 'inbox' | 'sent';
}
export interface Announcement {
  id: string;
  title: string; body: string;
  author: string;
  date: string;
  category: 'academic' | 'financial' | 'general' | 'urgent';
  pinned: boolean;
}
export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  type: 'exam' | 'class' | 'holiday' | 'event' | 'deadline';
  description?: string;
}
export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
