export interface Student {
  id: number;
  name: string;
  email: string;
  status: "active" | "inactive";
}

export type StudentStatus = Student["status"];

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}

export function formatStudent(student: Student): string {
  return `${student.id} - ${student.name} (${student.status})`;
}

export function isStudent(value: unknown): value is Student {
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

export function formatStudentStatus(status: unknown): string {
  switch (status) {
    case "active":
      return "Active Student";
    case "inactive":
      return "Inactive Student";
    default:
      return "Unknown Student Status";
  }
}
