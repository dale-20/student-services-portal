interface Student {
  id: number;
  name: string;
  email: string;
  status: "active" | "inactive";
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
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

console.log(formatStudent(student));

const studentResponse: ApiResponse<Student> = {
  success: true,
  data: student,
};

const studentsResponse: ApiResponse<Student[]> = {
  success: true,
  data: [student],
};

console.log(studentResponse);
console.log(studentsResponse);

function isStudent(value: unknown): value is Student {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const student = value as Record<string, unknown>;

  return (
    typeof student.id === "number" &&
    typeof student.name === "string" &&
    typeof student.email === "string" &&
    (student.status === "active" || student.status === "inactive")
  );
}

const validData: unknown = {
  id: 2,
  name: "Maria Santos",
  email: "maria@example.com",
  status: "active",
};

const invalidIdData: unknown = {
  id: "2",
  name: "Maria Santos",
  email: "maria@example.com",
  status: "active",
};

const missingNameData: unknown = {
  id: 3,
  email: "maria@example.com",
  status: "active",
};

console.log("Valid student:", isStudent(validData));
console.log("Invalid ID:", isStudent(invalidIdData));
console.log("Missing name:", isStudent(missingNameData));

function formatStudentStatus(status: Student["status"]): string {
  switch (status) {
    case "active":
      return "Active Student";

    case "inactive":
      return "Inactive Student";

    default:
      return "Unknown Student Status";
  }
}

console.log(formatStudentStatus("active"));
console.log(formatStudentStatus("inactive"));
