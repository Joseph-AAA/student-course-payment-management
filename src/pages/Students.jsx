import { useMemo, useState } from "react";
import { students as studentData } from "../data/students";
import StudentForm from "../components/students/StudentForm";
import StudentTable from "../components/students/StudentTable";
import StudentDetails from "./StudentDetails";

function Students() {
  const [students, setStudents] = useState(studentData);
  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("All Courses");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [viewingStudent, setViewingStudent] = useState(null);

  // Course names used for displaying the Course ID nicely
  const courseNames = {
    1: "Web Development",
    2: "Data Science",
    3: "UI/UX Design",
    4: "JavaScript",
    5: "Python",
    6: "React",
  };

  // Add student
  const handleAddStudent = (newStudent) => {
    setStudents((currentStudents) => [
      ...currentStudents,
      {
        ...newStudent,
        status: "Active",
      },
    ]);
  };

  // View student
  const handleViewStudent = (student) => {
    setViewingStudent(student);
  };

  // Edit student
  const handleEditStudent = (student) => {
    setEditingStudent(student);
    setShowForm(true);
    setViewingStudent(null);
  };

  // Update student
  const handleUpdateStudent = (updatedStudent) => {
    setStudents((currentStudents) =>
      currentStudents.map((student) =>
        student.id === updatedStudent.id
          ? {
              ...updatedStudent,
              status: student.status || "Active",
            }
          : student
      )
    );

    setViewingStudent(updatedStudent);
    setEditingStudent(null);
  };

  // Delete student
  const handleDeleteStudent = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    setStudents((currentStudents) =>
      currentStudents.filter((student) => student.id !== id)
    );

    if (viewingStudent?.id === id) {
      setViewingStudent(null);
    }

    if (editingStudent?.id === id) {
      setEditingStudent(null);
      setShowForm(false);
    }
  };

  // Close form
  const handleCloseForm = () => {
    setShowForm(false);
    setEditingStudent(null);
  };

  // Get course name
  const getCourseName = (courseId) => {
    return courseNames[courseId] || `Course ${courseId}`;
  };

  // Courses available in filter
  const courseOptions = [
    "All Courses",
    ...Array.from(
      new Set(students.map((student) => getCourseName(student.courseId)))
    ),
  ];

  // Filter students
  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        student.name?.toLowerCase().includes(searchText) ||
        student.email?.toLowerCase().includes(searchText) ||
        String(student.id).toLowerCase().includes(searchText);

      const matchesCourse =
        courseFilter === "All Courses" ||
        getCourseName(student.courseId) === courseFilter;

      const studentStatus = student.status || "Active";

      const matchesStatus =
        statusFilter === "All Status" ||
        studentStatus === statusFilter;

      return matchesSearch && matchesCourse && matchesStatus;
    });
  }, [students, search, courseFilter, statusFilter]);

  // Statistics
  const totalStudents = students.length;

  const activeCourses = new Set(
    students.map((student) => student.courseId)
  ).size;

  const pendingPayments = students.filter(
    (student) =>
      student.paymentStatus === "Pending" ||
      student.paymentStatus === "Partial"
  ).length;

  // For the current mock data
  const newThisMonth = students.filter((student) => {
    if (!student.enrollmentDate) return false;

    const enrollmentDate = new Date(student.enrollmentDate);
    const now = new Date();

    return (
      enrollmentDate.getMonth() === now.getMonth() &&
      enrollmentDate.getFullYear() === now.getFullYear()
    );
  }).length;

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">

      {/* ================= HEADER ================= */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            Students
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage and view all registered students
          </p>
        </div>

        <button
          onClick={() => {
            setEditingStudent(null);
            setShowForm(true);
            setViewingStudent(null);
          }}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
        >
          <span className="text-lg">+</span>
          Add Student
        </button>
      </div>

      {/* ================= STATISTICS ================= */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 mb-6">

        {/* Total Students */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
              👥
            </div>

            <div>
              <p className="text-2xl font-bold text-slate-900">
                {totalStudents}
              </p>

              <p className="text-sm text-slate-500">
                Total Students
              </p>
            </div>
          </div>
        </div>

        {/* Active Courses */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-2xl">
              🎓
            </div>

            <div>
              <p className="text-2xl font-bold text-slate-900">
                {activeCourses}
              </p>

              <p className="text-sm text-slate-500">
                Active Courses
              </p>
            </div>
          </div>
        </div>

        {/* New This Month */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-2xl">
              👤
            </div>

            <div>
              <p className="text-2xl font-bold text-slate-900">
                {newThisMonth}
              </p>

              <p className="text-sm text-slate-500">
                New This Month
              </p>
            </div>
          </div>
        </div>

        {/* Pending Payments */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-2xl">
              ⚠️
            </div>

            <div>
              <p className="text-2xl font-bold text-slate-900">
                {pendingPayments}
              </p>

              <p className="text-sm text-slate-500">
                Pending Payments
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* ================= ADD / EDIT FORM ================= */}
      {showForm && (
        <StudentForm
          onAddStudent={handleAddStudent}
          onUpdateStudent={handleUpdateStudent}
          onClose={handleCloseForm}
          editingStudent={editingStudent}
        />
      )}

      {/* ================= MAIN CONTENT ================= */}
      <div
        className={`grid grid-cols-1 gap-6 ${
          viewingStudent ? "xl:grid-cols-[minmax(0,1fr)_360px]" : ""
        }`}
      >

        {/* ================= LEFT SIDE ================= */}
        <div className="min-w-0">

          {/* Search & Filters */}
          <div className="mb-5 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">

            <div className="grid grid-cols-1 gap-3 md:grid-cols-4">

              {/* Search */}
              <div className="relative md:col-span-2">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  🔍
                </span>

                <input
                  type="text"
                  placeholder="Search by name, email or student ID..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Course */}
              <select
                value={courseFilter}
                onChange={(e) => setCourseFilter(e.target.value)}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-600 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              >
                {courseOptions.map((course) => (
                  <option key={course}>{course}</option>
                ))}
              </select>

              {/* Status */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-600 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              >
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Pending</option>
              </select>

            </div>

            {/* Filter info */}
            <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
              <span>
                Showing {filteredStudents.length} of {students.length} students
              </span>

              {(search ||
                courseFilter !== "All Courses" ||
                statusFilter !== "All Status") && (
                <button
                  onClick={() => {
                    setSearch("");
                    setCourseFilter("All Courses");
                    setStatusFilter("All Status");
                  }}
                  className="font-medium text-indigo-600 hover:text-indigo-700"
                >
                  Clear filters
                </button>
              )}
            </div>

          </div>

          {/* Student Table */}
          <StudentTable
            students={filteredStudents}
            onView={handleViewStudent}
            onEdit={handleEditStudent}
            onDelete={handleDeleteStudent}
            getCourseName={getCourseName}
          />

        </div>

        {/* ================= RIGHT SIDE DETAILS ================= */}
        {viewingStudent && (
          <div className="xl:sticky xl:top-6 xl:self-start">
            <StudentDetails
              student={viewingStudent}
              onClose={() => setViewingStudent(null)}
              onEdit={handleEditStudent}
              onDelete={handleDeleteStudent}
              getCourseName={getCourseName}
            />
          </div>
        )}

      </div>
    </div>
  );
}

export default Students;