interface Student {
  id: number;
  name: string;
  email: string;
  status: "active" | "inactive";
}

type UserRole = User | Admin;

interface User {
  id: number;
  name: string;
  role: "user";
}

interface Admin {
  id: number;
  name: string;
  role: "admin";
  permissions: string[];
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

interface StudentStats {
  total: number;
  active: number;
  inactive: number;
  averageId: number;
}

function formatStudent(student: Student): string {
  return `${student.id} - ${student.name} (${student.status})`;
}

const student: Student = {
  id: 1,
  name: "Cristian Dale Laureto",
  email: "juan@example.com",
  status: "active",
};

// console.log(formatStudent(student));

// const studentResponse: ApiResponse<Student> = {
//   success: true,
//   data: student,
// };

// const studentsResponse: ApiResponse<Student[]> = {
//   success: true,
//   data: [student],
// };

// console.log(studentResponse);
// console.log(studentsResponse);

// function isStudent(value: unknown): value is Student {
//   if (typeof value !== "object" || value === null) {
//     return false;
//   }

//   const student = value as Record<string, unknown>;

//   return (
//     typeof student.id === "number" &&
//     typeof student.name === "string" &&
//     typeof student.email === "string" &&
//     (student.status === "active" || student.status === "inactive")
//   );
// }

// const validData: unknown = {
//   id: 2,
//   name: "Maria Santos",
//   email: "maria@example.com",
//   status: "active",
// };

// const invalidIdData: unknown = {
//   id: "2",
//   name: "Maria Santos",
//   email: "maria@example.com",
//   status: "active",
// };

// const missingNameData: unknown = {
//   id: 3,
//   email: "maria@example.com",
//   status: "active",
// };

// console.log("Valid student:", isStudent(validData));
// console.log("Invalid ID:", isStudent(invalidIdData));
// console.log("Missing name:", isStudent(missingNameData));

// function formatStudentStatus(status: Student["status"]): string {
//   switch (status) {
//     case "active":
//       return "Active Student";

//     case "inactive":
//       return "Inactive Student";

//     default:
//       return "Unknown Student Status";
//   }
// }

function getStudentDisplayName(student: Student): string {
  return `${student.name} (${student.email})`;
}

function greetStudent(student: Student, greeting?: string): string {
  return `${greeting ?? "Hello"}, ${student.name}!`;
}

function getStudentLabel(student: Student, prefix: string = "Student"): string {
  return `${prefix}: ${student.name}`;
}
// console.log(formatStudentStatus("active"));
// console.log(formatStudentStatus("inactive"));
// console.log(getStudentDisplayName(student));
// console.log(greetStudent(student));
// console.log(greetStudent(student, "Welcome"));
// console.log(getStudentLabel(student));
// console.log(getStudentLabel(student, "User"));

function calculateAverage(scores: number[]): number {
  if (scores.length === 0) {
    return 0;
  }

  const total = scores.reduce((sum, score) => sum + score, 0);

  return total / scores.length;
}

function summarizeScores(scores: number[]): {
  average: number;
  highest: number;
  lowest: number;
} {
  if (scores.length === 0) {
    return {
      average: 0,
      highest: 0,
      lowest: 0,
    };
  }

  const average = calculateAverage(scores);

  const highest = scores.reduce((max, score) => (score > max ? score : max));

  const lowest = scores.reduce((min, score) => (score < min ? score : min));

  return {
    average,
    highest,
    lowest,
  };
}

const scores = [85, 90, 78, 92, 88];

// console.log("Average:", calculateAverage(scores));
// console.log("Summary:", summarizeScores(scores));

// console.log("Empty scores:", summarizeScores([]));

const students: Student[] = [
  {
    id: 1,
    name: "Juan Dela Cruz",
    email: "juan@example.com",
    status: "active",
  },
  {
    id: 2,
    name: "Maria Santos",
    email: "maria@example.com",
    status: "inactive",
  },
  {
    id: 3,
    name: "Pedro Garcia",
    email: "pedro@example.com",
    status: "active",
  },
];

function getStudentById(id: number): Student | undefined {
  return students.find((student) => student.id === id);
}

function getActiveStudents(): Student[] {
  return students.filter((student) => student.status === "active");
}

// console.log("Student with ID 1:", getStudentById(1));
// console.log("Student with ID 999:", getStudentById(999));
// console.log("Active students:", getActiveStudents());

function getStudentStats(): StudentStats {
  const total = students.length;

  const active = students.filter(
    (student) => student.status === "active",
  ).length;

  const inactive = students.filter(
    (student) => student.status === "inactive",
  ).length;

  const averageId =
    total === 0
      ? 0
      : students.reduce((sum, student) => sum + student.id, 0) / total;

  return {
    total,
    active,
    inactive,
    averageId,
  };
}

// console.log("Student statistics:", getStudentStats());

type Result<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: string;
    };

function getStudentEmail(id: number): Result<string> {
  const student = getStudentById(id);

  if (!student) {
    return {
      success: false,
      error: "Student not found",
    };
  }

  return {
    success: true,
    data: student.email,
  };
}

// console.log("Email result:", getStudentEmail(1));
// console.log("Email result:", getStudentEmail(999));

function describeUserRole(user: UserRole): string {
  if (user.role === "admin") {
    return `Admin ${user.name} has ${user.permissions.length} permission(s).`;
  }

  return `User ${user.name} has standard access.`;
}

const regularUser: User = {
  id: 1,
  name: "Juan Dela Cruz",
  role: "user",
};

const adminUser: Admin = {
  id: 2,
  name: "Maria Santos",
  role: "admin",
  permissions: ["manage_students", "view_reports"],
};

console.log(describeUserRole(regularUser));
console.log(describeUserRole(adminUser));
