import { Routes } from '@angular/router';
import { authGuard, unauthGuard } from '@core/auth/auth.guard';
import { roleGuard } from '@core/auth/role.guard';

export const routes: Routes = [
  // ── Public: Landing Page ──
  {
    path: '',
    loadComponent: () =>
      import('./features/landing/landing.component').then(m => m.LandingComponent),
    title: 'Greenfield University — World-Class Online Education',
  },

  // ── Auth ──
  {
    path: 'login',
    canActivate: [unauthGuard],
    loadComponent: () =>
      import('./features/auth/login/login.component').then(m => m.LoginComponent),
    title: 'Sign In — Greenfield University',
  },

  // ── Student Portal ──
  {
    path: 'student',
    canActivate: [authGuard, roleGuard('STUDENT')],
    loadComponent: () =>
      import('./layout/shell/shell.component').then(m => m.ShellComponent),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard',     loadComponent: () => import('./features/student/dashboard/dashboard.component').then(m => m.StudentDashboardComponent),         title: 'Dashboard — Student' },
      { path: 'courses',       loadComponent: () => import('./features/student/my-courses/my-courses.component').then(m => m.MyCoursesComponent),               title: 'My Courses' },
      { path: 'registration',  loadComponent: () => import('./features/student/course-registration/course-registration.component').then(m => m.CourseRegistrationComponent), title: 'Course Registration' },
      { path: 'attendance',    loadComponent: () => import('./features/student/attendance/attendance.component').then(m => m.AttendanceComponent),               title: 'Attendance' },
      { path: 'exams',         loadComponent: () => import('./features/student/exams/exams.component').then(m => m.ExamsComponent),                             title: 'Exams' },
      { path: 'results',       loadComponent: () => import('./features/student/results/results.component').then(m => m.ResultsComponent),                       title: 'Results' },
      { path: 'library',       loadComponent: () => import('./features/student/e-library/e-library.component').then(m => m.ELibraryComponent),                 title: 'E-Library' },
      { path: 'messages',      loadComponent: () => import('./features/student/messages/messages.component').then(m => m.MessagesComponent),                   title: 'Messages' },
      { path: 'calendar',      loadComponent: () => import('./features/student/calendar/calendar.component').then(m => m.StudentCalendarComponent),             title: 'Calendar' },
      { path: 'profile',       loadComponent: () => import('./features/student/profile/profile.component').then(m => m.StudentProfileComponent),               title: 'Profile' },
    ],
  },

  // ── Staff Portal ──
  {
    path: 'staff',
    canActivate: [authGuard, roleGuard('STAFF')],
    loadComponent: () =>
      import('./layout/shell/shell.component').then(m => m.ShellComponent),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard',     loadComponent: () => import('./features/staff/dashboard/dashboard.component').then(m => m.StaffDashboardComponent),             title: 'Dashboard — Staff' },
      { path: 'courses',       loadComponent: () => import('./features/staff/my-courses/my-courses.component').then(m => m.StaffCoursesComponent),             title: 'My Courses' },
      { path: 'students',      loadComponent: () => import('./features/staff/students/students.component').then(m => m.StudentsComponent),                     title: 'Students' },
      { path: 'attendance',    loadComponent: () => import('./features/staff/attendance-manager/attendance-manager.component').then(m => m.AttendanceManagerComponent), title: 'Attendance Manager' },
      { path: 'exams',         loadComponent: () => import('./features/staff/exam-builder/exam-builder.component').then(m => m.ExamBuilderComponent),           title: 'Exam Builder' },
      { path: 'grading',       loadComponent: () => import('./features/staff/grading/grading.component').then(m => m.GradingComponent),                       title: 'Grading' },
      { path: 'messages',      loadComponent: () => import('./features/staff/messages/messages.component').then(m => m.StaffMessagesComponent),               title: 'Messages' },
      { path: 'calendar',      loadComponent: () => import('./features/staff/calendar/calendar.component').then(m => m.StaffCalendarComponent),               title: 'Calendar' },
      { path: 'profile',       loadComponent: () => import('./features/staff/profile/profile.component').then(m => m.StaffProfileComponent),                 title: 'Profile' },
    ],
  },

  // ── Admin Portal ──
  {
    path: 'admin',
    canActivate: [authGuard, roleGuard('ADMIN')],
    loadComponent: () =>
      import('./layout/shell/shell.component').then(m => m.ShellComponent),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard',     loadComponent: () => import('./features/admin/dashboard/dashboard.component').then(m => m.AdminDashboardComponent),             title: 'Dashboard — Admin' },
      { path: 'users',         loadComponent: () => import('./features/admin/user-management/user-management.component').then(m => m.UserManagementComponent), title: 'User Management' },
      { path: 'courses',       loadComponent: () => import('./features/admin/course-management/course-management.component').then(m => m.CourseManagementComponent), title: 'Course Management' },
      { path: 'timetable',     loadComponent: () => import('./features/admin/timetable-builder/timetable-builder.component').then(m => m.TimetableBuilderComponent), title: 'Timetable Builder' },
      { path: 'reports',       loadComponent: () => import('./features/admin/reports/reports.component').then(m => m.ReportsComponent),                       title: 'Reports' },
      { path: 'announcements', loadComponent: () => import('./features/admin/announcements/announcements.component').then(m => m.AnnouncementsComponent),     title: 'Announcements' },
      { path: 'settings',      loadComponent: () => import('./features/admin/settings/settings.component').then(m => m.SettingsComponent),                   title: 'Settings' },
    ],
  },

  // ── Fallback ──
  { path: '**', redirectTo: '' },
];
