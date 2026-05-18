import { Student, Staff, User, Course, Grade, Attendance, Exam, LibraryBook, Message, Announcement, CalendarEvent } from "../models";

export const MOCK_USERS: User[] = [
  { id: 'u1', firstName: 'Amara', lastName: 'Okafor', email: 'student@school.edu', role: 'STUDENT',
    avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/SpongeBob_SquarePants_character.png', department: 'Computing', createdAt: '2023-09-01' },
  { id: 'u2', firstName: 'Dr. Bello', lastName: 'Adeyemi', email: 'staff@school.edu', role: 'STAFF',
    avatarUrl: 'https://static.wikia.nocookie.net/despicableme/images/1/1c/570_Despicable-Me-2-set-for-2013-3086.jpeg/revision/latest/smart/width/400/height/400', department: 'Computing', createdAt: '2020-01-15' },
  { id: 'u3', firstName: 'Fatima', lastName: 'Aliyu', email: 'admin@school.edu', role: 'ADMIN',
    avatarUrl: 'https://static.wikia.nocookie.net/animaniacs/images/d/d2/Brain_official_art.png', department: 'Administration', createdAt: '2019-06-01' },
];

export const MOCK_STUDENT: Student = {
  ...MOCK_USERS[0], role: 'STUDENT', matricNumber: 'GU/2023/CS/0042',
  programme: 'B.Sc. Computer Science', level: 300, gpa: 4.52, cgpa: 4.38,
  status: 'active', feeStatus: 'paid',
  enrolledCourses: ['c1','c2','c3','c4','c5'],
};

export const MOCK_STAFF: Staff = {
  ...MOCK_USERS[1], role: 'STAFF', staffId: 'GU/STAFF/0018',
  designation: 'Senior Lecturer', officeHours: 'Mon/Wed 2–4pm',
  courses: ['c1','c2','c6'],
};

export const MOCK_COURSES: Course[] = [
  { id:'c1', code:'CSC301', title:'Data Structures & Algorithms', department:'Computing', creditHours:3, semester:1, level:300, instructorId:'u2', instructorName:'Dr. Bello Adeyemi', enrolledCount:87, capacity:100, schedule:'Mon/Wed 10–11:30am', description:'Fundamental data structures and algorithm design.' },
  { id:'c2', code:'CSC303', title:'Database Management Systems', department:'Computing', creditHours:3, semester:1, level:300, instructorId:'u2', instructorName:'Dr. Bello Adeyemi', enrolledCount:72, capacity:80, schedule:'Tue/Thu 8–9:30am', description:'Relational databases, SQL, and normalization.' },
  { id:'c3', code:'CSC305', title:'Operating Systems', department:'Computing', creditHours:3, semester:1, level:300, instructorId:'u4', instructorName:'Prof. Ngozi Eze', enrolledCount:65, capacity:80, schedule:'Mon/Fri 12–1:30pm', description:'OS principles, process management, memory management.' },
  { id:'c4', code:'CSC307', title:'Computer Networks', department:'Computing', creditHours:3, semester:1, level:300, instructorId:'u5', instructorName:'Dr. Chukwu Nwosu', enrolledCount:58, capacity:70, schedule:'Wed 2–5pm', description:'Network protocols, TCP/IP, and network security.' },
  { id:'c5', code:'MTH301', title:'Numerical Methods', department:'Mathematics', creditHours:2, semester:1, level:300, instructorId:'u6', instructorName:'Dr. Aisha Musa', enrolledCount:90, capacity:100, schedule:'Fri 8–10am', description:'Numerical analysis and computational methods.' },
  { id:'c6', code:'CSC201', title:'Object-Oriented Programming', department:'Computing', creditHours:3, semester:1, level:200, instructorId:'u2', instructorName:'Dr. Bello Adeyemi', enrolledCount:105, capacity:120, schedule:'Tue/Thu 10–11:30am', description:'OOP principles using Java.' },
];

export const MOCK_GRADES: Grade[] = [
  { courseId:'c1', courseCode:'CSC301', courseTitle:'Data Structures & Algorithms', creditHours:3, score:78, grade:'B+', gradePoints:4.0, semester:'2024/2025 — Semester 1' },
  { courseId:'c2', courseCode:'CSC303', courseTitle:'Database Management Systems', creditHours:3, score:91, grade:'A', gradePoints:5.0, semester:'2024/2025 — Semester 1' },
  { courseId:'c3', courseCode:'CSC305', courseTitle:'Operating Systems', creditHours:3, score:65, grade:'C+', gradePoints:2.5, semester:'2024/2025 — Semester 1' },
  { courseId:'c4', courseCode:'CSC307', courseTitle:'Computer Networks', creditHours:3, score:84, grade:'A-', gradePoints:4.5, semester:'2024/2025 — Semester 1' },
  { courseId:'c5', courseCode:'MTH301', courseTitle:'Numerical Methods', creditHours:2, score:72, grade:'B', gradePoints:3.5, semester:'2024/2025 — Semester 1' },
];

export const MOCK_ATTENDANCE: Attendance[] = [
  { id:'a1', courseId:'c1', courseCode:'CSC301', courseTitle:'Data Structures', date:'2025-01-06', status:'present', week:1 },
  { id:'a2', courseId:'c1', courseCode:'CSC301', courseTitle:'Data Structures', date:'2025-01-08', status:'present', week:1 },
  { id:'a3', courseId:'c1', courseCode:'CSC301', courseTitle:'Data Structures', date:'2025-01-13', status:'absent',  week:2 },
  { id:'a4', courseId:'c2', courseCode:'CSC303', courseTitle:'DBMS', date:'2025-01-07', status:'present', week:1 },
  { id:'a5', courseId:'c2', courseCode:'CSC303', courseTitle:'DBMS', date:'2025-01-09', status:'late',    week:1 },
  { id:'a6', courseId:'c3', courseCode:'CSC305', courseTitle:'Operating Systems', date:'2025-01-06', status:'present', week:1 },
];

export const MOCK_EXAMS: Exam[] = [
  { id:'e1', courseId:'c1', courseCode:'CSC301', courseTitle:'Data Structures & Algorithms', type:'FINAL', date:'2025-06-10', startTime:'09:00', duration:180, venue:'Hall A — Row 4', status:'upcoming' },
  { id:'e2', courseId:'c2', courseCode:'CSC303', courseTitle:'Database Management Systems', type:'FINAL', date:'2025-06-12', startTime:'09:00', duration:180, venue:'Hall B — Row 2', status:'upcoming' },
  { id:'e3', courseId:'c3', courseCode:'CSC305', courseTitle:'Operating Systems', type:'FINAL', date:'2025-06-14', startTime:'14:00', duration:180, venue:'Hall A — Row 7', status:'upcoming' },
  { id:'e4', courseId:'c4', courseCode:'CSC307', courseTitle:'Computer Networks', type:'MIDTERM', date:'2025-03-20', startTime:'10:00', duration:120, venue:'Lab 3', status:'completed' },
  { id:'e5', courseId:'c5', courseCode:'MTH301', courseTitle:'Numerical Methods', type:'CA', date:'2025-02-15', startTime:'08:00', duration:90, venue:'Hall C', status:'completed' },
];

export const MOCK_BOOKS: LibraryBook[] = [
  { id:'b1', title:'Introduction to Algorithms', author:'Cormen, Leiserson, Rivest, Stein', isbn:'978-0262033848', department:'Computing', year:2022, available:true },
  { id:'b2', title:'Database System Concepts', author:'Silberschatz, Korth, Sudarshan', isbn:'978-0073523323', department:'Computing', year:2020, available:false, dueDate:'2025-04-15' },
  { id:'b3', title:'Modern Operating Systems', author:'Andrew S. Tanenbaum', isbn:'978-0136006633', department:'Computing', year:2021, available:true },
  { id:'b4', title:'Computer Networks', author:'Tanenbaum & Wetherall', isbn:'978-0132126953', department:'Computing', year:2019, available:true },
  { id:'b5', title:'Clean Code', author:'Robert C. Martin', isbn:'978-0132350884', department:'Computing', year:2018, available:false, dueDate:'2025-04-20' },
];

export const MOCK_MESSAGES: Message[] = [
  { id:'m1', senderId:'u2', senderName:'Dr. Bello Adeyemi', subject:'Assignment 2 Feedback', body:'Hi Amara, I reviewed your assignment. Overall good work! Please see my inline comments and resubmit by Friday. Focus on the time complexity analysis of your merge sort implementation.', date:'2025-04-01', read:false, type:'inbox' },
  { id:'m2', senderId:'u3', senderName:'Fatima Aliyu (Admin)', subject:'Fee Payment Reminder', body:'Dear Student, this is a reminder that the second semester fees are due by April 30th. Please ensure timely payment to avoid suspension of portal access. Contact finance@greenfield.edu for payment plans.', date:'2025-03-28', read:true, type:'inbox' },
  { id:'m3', senderId:'u1', senderName:'Amara Okafor', subject:'Re: Assignment 2 Feedback', body:'Thank you Dr. Adeyemi. I will review the comments and resubmit by Friday.', date:'2025-04-02', read:true, type:'sent' },
];

export const MOCK_ANNOUNCEMENTS: Announcement[] = [
  { id:'an1', title:'Final Examinations — June 2025 Timetable Released', body:'The timetable for the 2024/2025 second semester final examinations has been released. Students are advised to check their exam schedules on the portal and confirm venue allocations.', author:'Academic Registry', date:'2025-04-01', category:'academic', pinned:true },
  { id:'an2', title:'Library Extended Hours During Examination Period', body:'The university library will operate extended hours (8am–10pm) from May 26 to June 20 to support students during the examination period.', author:'Library Services', date:'2025-03-30', category:'general', pinned:false },
  { id:'an3', title:'IMPORTANT: Portal Maintenance — April 10', body:'The student portal will be unavailable on April 10 from 12am–4am for scheduled maintenance. Please plan accordingly.', author:'ICT Services', date:'2025-03-28', category:'urgent', pinned:true },
  { id:'an4', title:'Scholarship Applications Now Open — 2025/2026', body:'Applications for the Greenfield University Academic Excellence Scholarship are now open. Eligible students (CGPA 4.5+) should apply via the portal before May 15.', author:'Student Affairs', date:'2025-03-25', category:'academic', pinned:false },
];

export const MOCK_CALENDAR_EVENTS: CalendarEvent[] = [
  { id:'ev1', title:'CSC301 Final Exam', date:'2025-06-10', type:'exam', description:'Hall A — 9:00am, 3 hours' },
  { id:'ev2', title:'CSC303 Final Exam', date:'2025-06-12', type:'exam', description:'Hall B — 9:00am, 3 hours' },
  { id:'ev3', title:'CSC305 Final Exam', date:'2025-06-14', type:'exam', description:'Hall A — 2:00pm, 3 hours' },
  { id:'ev4', title:'Second Semester Begins', date:'2025-09-08', type:'event', description:'Orientation for new and returning students' },
  { id:'ev5', title:'Exam Period Begins', date:'2025-06-09', endDate:'2025-06-27', type:'exam' },
  { id:'ev6', title:'Fee Deadline', date:'2025-04-30', type:'deadline', description:'Second semester fee payment deadline' },
];
