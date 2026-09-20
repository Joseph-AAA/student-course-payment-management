import {
  Home,
  BookOpen,
  Users,
  CreditCard, 
  Settings,
  Info,
  BarChart3,
   WalletCards, UserPlus,Mail,UserRound,
} from "lucide-react";

import javascript from "../assets/course-icons/javascript.png";
import reactIcon from "../assets/course-icons/react..png";
import node from "../assets/course-icons/node.png";
import typescript from "../assets/course-icons/typescript.png";
import html5 from "../assets/course-icons/html5.png";
import css3 from "../assets/course-icons/css3.png";
import python from "../assets/course-icons/python.png";
import ui_ux from "../assets/course-icons/ui-ux.png";
import nextjs from "../assets/course-icons/next.png";
import mongo from "../assets/course-icons/mongo.png";
import tailwindcss from "../assets/course-icons/tailwind.png";
import express from "../assets/course-icons/express.png";


/******************************************************Data for sidebarLink**********************************/


export const sidebarLinks = [
  {
    label: "Dashboard",
    path: "/",
    icon: Home,
  },
  {
    label: "Courses",
    path: "/courses",
    icon: BookOpen,
  },
  {
    label: "Students",
    path: "/students",
    icon: Users,
  },
  {
    label: "Payments",
    path: "/payments",
    icon: CreditCard,
  },
  {
    label: "Setting",
    path: "/setting",
    icon: Settings,
  },
  {
    label: "About",
    path: "/about",
    icon: Info,
  },
];


/******************************************************Data for Courses**********************************/

// export const courses = [
//   {
//     id: 1,
//     slug: "react",
//     name: "React",
//     category: "Frontend",
//     level: "Intermediate",
//     duration: "8 weeks",
//     fee: 1500,
//     students: 24,
//     description:
//       "Build modern and interactive user interfaces using React.",
//     usefulFor:
//       "Building scalable web applications and dynamic user interfaces.",
//     logo: reactIcon,
//   },
//   {
//     id: 2,
//     slug: "javascript",
//     name: "JavaScript",
//     category: "Programming",
//     level: "Beginner",
//     duration: "6 weeks",
//     fee: 1200,
//     students: 32,
//     description:
//       "Learn the fundamentals of JavaScript and modern web development.",
//     usefulFor:
//       "Creating interactive websites and learning the foundation of frontend development.",
//     logo:javascript,
//   },
//   {
//     id: 3,
//     slug: "python",
//     name: "Python",
//     category: "Programming",
//     level: "Beginner",
//     duration: "8 weeks",
//     fee: 1400,
//     students: 28,
//     description:
//       "Learn Python programming from fundamentals to practical applications.",
//     usefulFor:
//       "Automation, backend development, data analysis and AI.",
//     logo: "/logos/python.svg",
//   },
//   {
//     id: 4,
//     slug: "html-css",
//     name: "HTML & CSS",
//     category: "Frontend",
//     level: "Beginner",
//     duration: "5 weeks",
//     fee: 1000,
//     students: 20,
//     description:
//       "Learn how to structure and style modern responsive websites.",
//     usefulFor:
//       "Building the structure and visual design of websites.",
//     logo: "/logos/html-css.svg",
//   },
//   {
//     id: 5,
//     slug: "nodejs",
//     name: "Node.js",
//     category: "Backend",
//     level: "Intermediate",
//     duration: "7 weeks",
//     fee: 1600,
//     students: 18,
//     description:
//       "Build backend applications and APIs using Node.js.",
//     usefulFor:
//       "Creating servers, REST APIs and full-stack applications.",
//     logo: "/logos/nodejs.svg",
//   },
//   {
//     id: 6,
//     slug: "typescript",
//     name: "TypeScript",
//     category: "Programming",
//     level: "Intermediate",
//     duration: "6 weeks",
//     fee: 1300,
//     students: 16,
//     description:
//       "Add static typing and better developer tooling to JavaScript projects.",
//     usefulFor:
//       "Building large and maintainable JavaScript applications.",
//     logo: "/logos/typescript.svg",
//   },
// ];


// export const coursesData = [
//   { id: 1, title: "JavaScript Fundamentals", category: "Web Development", level: "Beginner", duration: "8 weeks", price: "RM 899", students: 110, icon: javascript ,color: "bg-yellow-400", bgcolor: "bg-yellow-400/30", textColor: "text-yellow-600", status: "Published", description: "Master JavaScript from the ground up. This course covers variables, functions, arrays, objects, and DOM manipulation.", rating: 4.8, totalLessons: 48, instructor: { name: "John Doe", title: "Senior Developer" } },
//   { id: 2, title: "React.js Bootcamp", category: "Web Development", level: "Intermediate", duration: "10 weeks", price: "RM 899", students: 85, icon: reactIcon, color: "bg-blue-400", bgcolor: "bg-blue-400/30", textColor: "text-blue-600", status: "Published", description: "Learn React from scratch and build real-world applications with modern tools and best practices.", rating: 4.9, totalLessons: 62, instructor: { name: "Jane Smith", title: "Frontend Architect" } },
//   { id: 3, title: "Node.js Complete Guide", category: "Backend Development", level: "Intermediate", duration: "9 weeks", price: "RM 899", students: 63, icon: node, color: "bg-green-400", bgcolor: "bg-green-400/30", textColor: "text-green-600", status: "Published", description: "Learn Node.js from scratch and build powerful backend applications with Express and MongoDB.", rating: 4.7, totalLessons: 55, instructor: { name: "Mike Johnson", title: "Backend Engineer" } },
//   { id: 4, title: "TypeScript Essentials", category: "Web Development", level: "Beginner", duration: "8 weeks", price: "RM 499", students: 45, icon:typescript,color: "bg-blue-500", bgcolor: "bg-blue-500/30", textColor: "text-blue-600", status: "Published", description: "Master TypeScript for safer, more maintainable JavaScript applications with static typing.", rating: 4.6, totalLessons: 40, instructor: { name: "Sarah Wilson", title: "Fullstack Developer" } },
//   { id: 5, title: "HTML5 Fundamentals", category: "Web Development", level: "Beginner", duration: "8 weeks", price: "RM 899", students: 110, icon: html5,color: "bg-orange-500", bgcolor: "bg-orange-500/30", textColor: "text-orange-600", status: "In Progress", description: "Build semantic, accessible web pages with HTML5 and modern web standards.", rating: 4.5, totalLessons: 35, instructor: { name: "David Lee", title: "Web Developer" } },
//   { id: 6, title: "CSS3 Mastery", category: "Web Development", level: "Beginner", duration: "8 weeks", price: "RM 899", students: 110, icon: css3,color: "bg-pink-500", bgcolor: "bg-pink-500/30", textColor: "text-pink-600", status: "In Progress", description: "Take your CSS skills to the next level with Flexbox, Grid, animations, and responsive design.", rating: 4.8, totalLessons: 45, instructor: { name: "Emily Chen", title: "UI Designer" } },
//   { id: 7, title: "Python for Beginners", category: "Backend Development", level: "Beginner", duration: "8 weeks", price: "RM 899", students: 98, icon: python, color: "bg-yellow-600", bgcolor: "bg-yellow-600/30", textColor: "text-yellow-700", status: "Draft", description: "Start your Python journey with practical examples and projects that build real skills.", rating: 4.7, totalLessons: 50, instructor: { name: "Alex Brown", title: "Data Scientist" } },
//   { id: 8, title: "UI/UX Design Principles", category: "UI/UX Design", level: "Intermediate", duration: "6 weeks", price: "RM 699", students: 56, icon: ui_ux,color: "bg-purple-400", bgcolor: "bg-purple-400/30", textColor: "text-purple-600", status: "Draft", description: "Learn the fundamentals of user-centered design, wireframing, prototyping, and usability testing.", rating: 4.9, totalLessons: 42, instructor: { name: "Lisa Anderson", title: "UX Designer" } },

// ];


// export const upcomingCourses = [
//   {
//     id: 101,
//     title: "Next.js Advanced",
//     category: "Web Development",
//     level: "Intermediate",
//     price: 899,
//     status: "Upcoming",
//     releaseDate: "2026-10-15",
//     instructor: {
//       name: "John Doe",
//       title: "Senior Full-Stack Developer",
//     },
//     icon: nextjs,
//   },

//   {
//     id: 102,
//     title: "Tailwind CSS Mastery",
//     category: "Web Development",
//     level: "Beginner",
//     price: 599,
//     status: "Upcoming",
//     releaseDate: "2026-10-22",
//     instructor: {
//       name: "Jane Smith",
//       title: "Frontend Developer",
//     },
//     icon: tailwindcss,
//   },

//   {
//     id: 103,
//     title: "MongoDB Essentials",
//     category: "Database",
//     level: "Intermediate",
//     price: 699,
//     status: "Upcoming",
//     releaseDate: "2026-10-29",
//     instructor: {
//       name: "Michael Tan",
//       title: "Backend Engineer",
//     },
//     icon: mongo,
//   },

//   {
//     id: 104,
//     title: "Express.js Backend Development",
//     category: "Backend Development",
//     level: "Intermediate",
//     price: 799,
//     status: "Upcoming",
//     releaseDate: "2026-11-05",
//     instructor: {
//       name: "David Lee",
//       title: "Backend Developer",
//     },
//     icon: express,
//   },
// ];


export const coursesData = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    category: "Web Development",
    level: "Beginner",
    duration: "8 weeks",
    price: "RM 899",
    students: 110,
    icon: javascript,
    color: "bg-yellow-400",
    bgcolor: "bg-yellow-400/30",
    textColor: "text-yellow-600",
    status: "Published",
    description:
      "Master JavaScript from the ground up. This course covers variables, functions, arrays, objects, and DOM manipulation.",
    rating: 4.8,
    totalLessons: 48,
    instructor: {
      name: "John Doe",
      title: "Senior Developer",
    },
  },

  {
    id: 2,
    title: "React.js Bootcamp",
    category: "Web Development",
    level: "Intermediate",
    duration: "10 weeks",
    price: "RM 899",
    students: 85,
    icon: reactIcon,
    color: "bg-blue-400",
    bgcolor: "bg-blue-400/30",
    textColor: "text-blue-600",
    status: "Published",
    description:
      "Learn React from scratch and build real-world applications with modern tools and best practices.",
    rating: 4.9,
    totalLessons: 62,
    instructor: {
      name: "Jane Smith",
      title: "Frontend Architect",
    },
  },

  {
    id: 3,
    title: "Node.js Complete Guide",
    category: "Backend Development",
    level: "Intermediate",
    duration: "9 weeks",
    price: "RM 899",
    students: 63,
    icon: node,
    color: "bg-green-400",
    bgcolor: "bg-green-400/30",
    textColor: "text-green-600",
    status: "Published",
    description:
      "Learn Node.js from scratch and build powerful backend applications with Express and MongoDB.",
    rating: 4.7,
    totalLessons: 55,
    instructor: {
      name: "Mike Johnson",
      title: "Backend Engineer",
    },
  },

  {
    id: 4,
    title: "TypeScript Essentials",
    category: "Web Development",
    level: "Beginner",
    duration: "8 weeks",
    price: "RM 499",
    students: 45,
    icon: typescript,
    color: "bg-blue-500",
    bgcolor: "bg-blue-500/30",
    textColor: "text-blue-600",
    status: "Published",
    description:
      "Master TypeScript for safer, more maintainable JavaScript applications with static typing.",
    rating: 4.6,
    totalLessons: 40,
    instructor: {
      name: "Sarah Wilson",
      title: "Fullstack Developer",
    },
  },

  {
    id: 5,
    title: "HTML5 Fundamentals",
    category: "Web Development",
    level: "Beginner",
    duration: "8 weeks",
    price: "RM 899",
    students: 110,
    icon: html5,
    color: "bg-orange-500",
    bgcolor: "bg-orange-500/30",
    textColor: "text-orange-600",
    status: "In Progress",
    description:
      "Build semantic, accessible web pages with HTML5 and modern web standards.",
    rating: 4.5,
    totalLessons: 35,
    instructor: {
      name: "David Lee",
      title: "Web Developer",
    },
  },

  {
    id: 6,
    title: "CSS3 Mastery",
    category: "Web Development",
    level: "Beginner",
    duration: "8 weeks",
    price: "RM 899",
    students: 110,
    icon: css3,
    color: "bg-pink-500",
    bgcolor: "bg-pink-500/30",
    textColor: "text-pink-600",
    status: "In Progress",
    description:
      "Take your CSS skills to the next level with Flexbox, Grid, animations, and responsive design.",
    rating: 4.8,
    totalLessons: 45,
    instructor: {
      name: "Emily Chen",
      title: "UI Designer",
    },
  },

  {
    id: 7,
    title: "Python for Beginners",
    category: "Backend Development",
    level: "Beginner",
    duration: "8 weeks",
    price: "RM 899",
    students: 98,
    icon: python,
    color: "bg-yellow-600",
    bgcolor: "bg-yellow-600/30",
    textColor: "text-yellow-700",
    status: "Draft",
    description:
      "Start your Python journey with practical examples and projects that build real skills.",
    rating: 4.7,
    totalLessons: 50,
    instructor: {
      name: "Alex Brown",
      title: "Data Scientist",
    },
  },

  {
    id: 8,
    title: "UI/UX Design Principles",
    category: "UI/UX Design",
    level: "Intermediate",
    duration: "6 weeks",
    price: "RM 699",
    students: 56,
    icon: ui_ux,
    color: "bg-purple-400",
    bgcolor: "bg-purple-400/30",
    textColor: "text-purple-600",
    status: "Draft",
    description:
      "Learn the fundamentals of user-centered design, wireframing, prototyping, and usability testing.",
    rating: 4.9,
    totalLessons: 42,
    instructor: {
      name: "Lisa Anderson",
      title: "UX Designer",
    },
  },

  // Upcoming courses
  {
    id: 101,
    title: "Next.js Advanced",
    category: "Web Development",
    level: "Intermediate",
    duration: "8 weeks",
    price: "RM 899",
    students: 0,
    icon: nextjs,
    color: "bg-black",
    bgcolor: "bg-gray-200",
    textColor: "text-gray-700",
    status: "Upcoming",
    releaseDate: "2026-10-15",
    description:
      "Build modern full-stack web applications with Next.js, App Router, server components, and advanced routing.",
    rating: 0,
    totalLessons: 0,
    instructor: {
      name: "John Doe",
      title: "Senior Full-Stack Developer",
    },
  },

  {
    id: 102,
    title: "Tailwind CSS Mastery",
    category: "Web Development",
    level: "Beginner",
    duration: "6 weeks",
    price: "RM 599",
    students: 0,
    icon: tailwindcss,
    color: "bg-cyan-400",
    bgcolor: "bg-cyan-400/30",
    textColor: "text-cyan-600",
    status: "Upcoming",
    releaseDate: "2026-10-22",
    description:
      "Master Tailwind CSS and build responsive, modern user interfaces efficiently using utility-first styling.",
    rating: 0,
    totalLessons: 0,
    instructor: {
      name: "Jane Smith",
      title: "Frontend Developer",
    },
  },

  {
    id: 103,
    title: "MongoDB Essentials",
    category: "Database",
    level: "Intermediate",
    duration: "7 weeks",
    price: "RM 699",
    students: 0,
    icon: mongo,
    color: "bg-green-500",
    bgcolor: "bg-green-500/30",
    textColor: "text-green-600",
    status: "Upcoming",
    releaseDate: "2026-10-29",
    description:
      "Learn MongoDB fundamentals, database design, queries, collections, and how to use MongoDB in modern applications.",
    rating: 0,
    totalLessons: 0,
    instructor: {
      name: "Michael Tan",
      title: "Backend Engineer",
    },
  },

  {
    id: 104,
    title: "Express.js Backend Development",
    category: "Backend Development",
    level: "Intermediate",
    duration: "7 weeks",
    price: "RM 799",
    students: 0,
    icon: express,
    color: "bg-gray-700",
    bgcolor: "bg-gray-700/30",
    textColor: "text-gray-700",
    status: "Upcoming",
    releaseDate: "2026-11-05",
    description:
      "Build REST APIs and backend applications using Express.js, middleware, routing, authentication, and databases.",
    rating: 0,
    totalLessons: 0,
    instructor: {
      name: "David Lee",
      title: "Backend Developer",
    },
  },
];
/******************************************************Data for students**********************************/

export const students = [
  {
    id: "STU-001",
    name: "Sarah Lee",
    email: "sarah.lee@email.com",
    phone: "+60 12-345 6789",
    courseId: 1,
    status: "Active",
    enrolledDate: "2026-04-15",
  },
  {
    id: "STU-002",
    name: "John Tan",
    email: "john.tan@email.com",
    phone: "+60 13-456 7890",
    courseId: 3,
    status: "Active",
    enrolledDate: "2026-04-10",
  },
  {
    id: "STU-003",
    name: "Emily Chen",
    email: "emily.chen@email.com",
    phone: "+60 14-567 8901",
    courseId: 2,
    status: "Active",
    enrolledDate: "2026-04-05",
  },
  {
    id: "STU-004",
    name: "Daniel Lim",
    email: "daniel.lim@email.com",
    phone: "+60 16-234 5678",
    courseId: 1,
    status: "Active",
    enrolledDate: "2026-03-28",
  },
  {
    id: "STU-005",
    name: "Jessica Wong",
    email: "jessica.wong@email.com",
    phone: "+60 17-345 6789",
    courseId: 4,
    status: "Active",
    enrolledDate: "2026-03-20",
  },
  {
    id: "STU-006",
    name: "Michael Ng",
    email: "michael.ng@email.com",
    phone: "+60 18-456 7890",
    courseId: 5,
    status: "Inactive",
    enrolledDate: "2026-03-15",
  },
  {
    id: "STU-007",
    name: "Samantha Tan",
    email: "samantha.tan@email.com",
    phone: "+60 19-567 8901",
    courseId: 1,
    status: "Active",
    enrolledDate: "2026-03-10",
  },
  {
    id: "STU-008",
    name: "David Ho",
    email: "david.ho@email.com",
    phone: "+60 12-678 9012",
    courseId: 3,
    status: "Active",
    enrolledDate: "2026-03-05",
  },
];


/******************************************************Data for payments**********************************/

export const payments = [
  // April
  {
    id: "PAY-001",
    studentId: "STU-001",
    courseId: 1,
    totalFee: 1500,
    amountPaid: 1500,
    balance: 0,
    status: "Paid",
    paymentDate: "2026-04-15",
  },
  {
    id: "PAY-002",
    studentId: "STU-002",
    courseId: 3,
    totalFee: 1400,
    amountPaid: 700,
    balance: 700,
    status: "Partial",
    paymentDate: "2026-04-10",
  },
  {
    id: "PAY-003",
    studentId: "STU-003",
    courseId: 2,
    totalFee: 1200,
    amountPaid: 1200,
    balance: 0,
    status: "Paid",
    paymentDate: "2026-04-05",
  },

  // May
  {
    id: "PAY-004",
    studentId: "STU-004",
    courseId: 1,
    totalFee: 1500,
    amountPaid: 1500,
    balance: 0,
    status: "Paid",
    paymentDate: "2026-05-12",
  },
  {
    id: "PAY-005",
    studentId: "STU-005",
    courseId: 4,
    totalFee: 1000,
    amountPaid: 500,
    balance: 500,
    status: "Partial",
    paymentDate: "2026-05-18",
  },

  // June
  {
    id: "PAY-006",
    studentId: "STU-006",
    courseId: 5,
    totalFee: 1600,
    amountPaid: 1600,
    balance: 0,
    status: "Paid",
    paymentDate: "2026-06-08",
  },
  {
    id: "PAY-007",
    studentId: "STU-007",
    courseId: 2,
    totalFee: 1200,
    amountPaid: 600,
    balance: 600,
    status: "Partial",
    paymentDate: "2026-06-20",
  },

  // July
  {
    id: "PAY-008",
    studentId: "STU-008",
    courseId: 1,
    totalFee: 1500,
    amountPaid: 1500,
    balance: 0,
    status: "Paid",
    paymentDate: "2026-07-05",
  },
  {
    id: "PAY-009",
    studentId: "STU-009",
    courseId: 3,
    totalFee: 1400,
    amountPaid: 1400,
    balance: 0,
    status: "Paid",
    paymentDate: "2026-07-14",
  },
  {
    id: "PAY-010",
    studentId: "STU-010",
    courseId: 4,
    totalFee: 1000,
    amountPaid: 500,
    balance: 500,
    status: "Partial",
    paymentDate: "2026-07-25",
  },

  // August
  {
    id: "PAY-011",
    studentId: "STU-011",
    courseId: 5,
    totalFee: 1600,
    amountPaid: 1600,
    balance: 0,
    status: "Paid",
    paymentDate: "2026-08-03",
  },
  {
    id: "PAY-012",
    studentId: "STU-012",
    courseId: 2,
    totalFee: 1200,
    amountPaid: 600,
    balance: 600,
    status: "Partial",
    paymentDate: "2026-08-19",
  },
];


/******************************************************Data for dashborad**********************************/

export const dashboardCards = [
  {
    icon: Users,
    value: students.length,
    label: "Total Students",
    bgColor : "bg-[#2563EB]",
    change: "↑ 12%",
    text : "from last month"
  },
  {
    icon: BookOpen,
    value: coursesData.length,
    label: "Total Courses",
    bgColor :"bg-[#16A34A]",
    change: "↑ 8%",
    text : "from last month"
  },
  {
    icon: BarChart3,
    value: `RM ${payments.reduce((total, payment) => total + payment.amountPaid, 0).toLocaleString()}`,
    label: "Total Revenue",
     bgColor : "bg-[#7C3AED]",
     change: "↑ 15%",
     text : "from last month"
  },
  {
    icon: WalletCards,
    value: `RM ${payments.reduce((total, payment) => total + payment.balance, 0).toLocaleString()}`,
    label: "Pending Payments",
    bgColor : "bg-[#EA580C]",
    change: "↓ 5%",
    text : "from last month"
  },
];


/******************************************************Data for Activity**********************************/

export const activity = [
  {
    id: 1,
    type: "student",
    name: "Sarah Lee",
    time: "2 minutes ago",
  },
  {
    id: 2,
    type: "payment",
    name: "John Tan",
    amount: 1500,
    time: "5 minutes ago",
  },
  {
    id: 3,
    type: "course",
    name: "React.js for Beginners",
    time: "1 hour ago",
  },
  {
    id: 4,
    type: "paymentReminder",
    count: 5,
    time: "2 hours ago",
  },
  {
    id: 5,
    type: "profileUpdate",
    name: "Daniel Lim",
    time: "3 hours ago",
  },
]

export const activityConfig = {
  student: {
    icon: UserPlus,
    bgColor :"bg-[#16A34A]/30",
    message: (activity) =>
      `New student ${activity.name} has been registered`,
  },

  payment: {
    icon: CreditCard,
    bgColor :"bg-[#16A34A]/30",
    message: (activity) =>
      `Payment received from ${activity.name}`,
  },

  course: {
    icon: BookOpen,
    bgColor : "bg-[#7C3AED]/30",
    message: (activity) =>
      `New course ${activity.name} has been added`,
  },

  paymentReminder: {
    icon: Mail,
    bgColor : "bg-[#EA580C]/30",
    message: (activity) =>
      `Payment reminder sent to ${activity.count} students`,
  },

  profileUpdate: {
    icon: UserRound,
    bgColor : "bg-[#2563EB]/30",
    message: (activity) =>
      `Student ${activity.name} updated his profile`,
  },
};





