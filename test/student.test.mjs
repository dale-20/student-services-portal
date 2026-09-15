import assert from "node:assert/strict";
import test from "node:test";

import {
  formatStudent,
  formatStudentStatus,
  isStudent,
} from "../dist/student.js";

const student = {
  id: 1,
  name: "Juan Dela Cruz",
  email: "juan@example.com",
  status: "active",
};

test("formats a student", () => {
  assert.equal(formatStudent(student), "1 - Juan Dela Cruz (active)");
});

test("formats active and inactive status labels", () => {
  assert.equal(formatStudentStatus("active"), "Active Student");
  assert.equal(formatStudentStatus("inactive"), "Inactive Student");
});

test("handles unexpected status values safely", () => {
  assert.equal(formatStudentStatus("pending"), "Unknown Student Status");
  assert.equal(formatStudentStatus(null), "Unknown Student Status");
});

test("validates unknown student data", () => {
  assert.equal(isStudent(student), true);
  assert.equal(isStudent({ ...student, id: "1" }), false);
  assert.equal(
    isStudent({ id: 1, email: "juan@example.com", status: "active" }),
    false,
  );
});
