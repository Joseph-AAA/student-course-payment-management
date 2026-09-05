import {
  Home,
  BookOpen,
  Users,
  CreditCard, 
  Settings,
  Info,
} from "lucide-react";

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


export const courses = [
  {
    id: 1,
    slug: "react",
    name: "React",
    category: "Frontend",
    level: "Intermediate",
    duration: "8 weeks",
    fee: 1500,
    students: 24,
    description:
      "Build modern and interactive user interfaces using React.",
    usefulFor:
      "Building scalable web applications and dynamic user interfaces.",
    logo: "/logos/react.svg",
  },
  {
    id: 2,
    slug: "javascript",
    name: "JavaScript",
    category: "Programming",
    level: "Beginner",
    duration: "6 weeks",
    fee: 1200,
    students: 32,
    description:
      "Learn the fundamentals of JavaScript and modern web development.",
    usefulFor:
      "Creating interactive websites and learning the foundation of frontend development.",
    logo: "/logos/javascript.svg",
  },
  {
    id: 3,
    slug: "python",
    name: "Python",
    category: "Programming",
    level: "Beginner",
    duration: "8 weeks",
    fee: 1400,
    students: 28,
    description:
      "Learn Python programming from fundamentals to practical applications.",
    usefulFor:
      "Automation, backend development, data analysis and AI.",
    logo: "/logos/python.svg",
  },
  {
    id: 4,
    slug: "html-css",
    name: "HTML & CSS",
    category: "Frontend",
    level: "Beginner",
    duration: "5 weeks",
    fee: 1000,
    students: 20,
    description:
      "Learn how to structure and style modern responsive websites.",
    usefulFor:
      "Building the structure and visual design of websites.",
    logo: "/logos/html-css.svg",
  },
  {
    id: 5,
    slug: "nodejs",
    name: "Node.js",
    category: "Backend",
    level: "Intermediate",
    duration: "7 weeks",
    fee: 1600,
    students: 18,
    description:
      "Build backend applications and APIs using Node.js.",
    usefulFor:
      "Creating servers, REST APIs and full-stack applications.",
    logo: "/logos/nodejs.svg",
  },
  {
    id: 6,
    slug: "typescript",
    name: "TypeScript",
    category: "Programming",
    level: "Intermediate",
    duration: "6 weeks",
    fee: 1300,
    students: 16,
    description:
      "Add static typing and better developer tooling to JavaScript projects.",
    usefulFor:
      "Building large and maintainable JavaScript applications.",
    logo: "/logos/typescript.svg",
  },
];


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






export const payments = [
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
  {
    id: "PAY-004",
    studentId: "STU-004",
    courseId: 1,
    totalFee: 1500,
    amountPaid: 750,
    balance: 750,
    status: "Partial",
    paymentDate: "2026-03-28",
  },
  {
    id: "PAY-005",
    studentId: "STU-005",
    courseId: 4,
    totalFee: 1000,
    amountPaid: 1000,
    balance: 0,
    status: "Paid",
    paymentDate: "2026-03-20",
  },
  {
    id: "PAY-006",
    studentId: "STU-006",
    courseId: 5,
    totalFee: 1600,
    amountPaid: 0,
    balance: 1600,
    status: "Pending",
    paymentDate: null,
  },
];