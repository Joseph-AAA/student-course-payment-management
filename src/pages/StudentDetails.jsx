function StudentDetails({
  student,
  onClose,
  onEdit,
  onDelete,
  getCourseName,
}) {
  if (!student) return null;

  const totalFee = Number(student.totalFee) || 0;
  const amountPaid = Number(student.amountPaid) || 0;
  const balance = totalFee - amountPaid;

  const studentStatus = student.status || "Active";

  const getStatusStyle = () => {
    if (studentStatus === "Active") {
      return "bg-emerald-50 text-emerald-600";
    }

    if (studentStatus === "Inactive") {
      return "bg-slate-100 text-slate-500";
    }

    return "bg-amber-50 text-amber-600";
  };

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

      {/* ================= PROFILE HEADER ================= */}
      <div className="relative border-b border-slate-100 p-5">

        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-slate-700"
          title="Close"
        >
          ✕
        </button>

        <div className="flex items-center gap-4 pr-5">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-xl font-bold text-indigo-600">
            {student.name?.charAt(0).toUpperCase()}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-slate-900">
                {student.name}
              </h2>

              <span
                className={`rounded-full px-2 py-1 text-[10px] font-medium ${getStatusStyle()}`}
              >
                {studentStatus}
              </span>
            </div>

            <p className="mt-1 text-xs text-slate-400">
              STU-{String(student.id).padStart(3, "0")}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              {student.email}
            </p>
          </div>

        </div>
      </div>

      {/* ================= TABS ================= */}
      <div className="grid grid-cols-4 border-b border-slate-100">

        <button className="border-b-2 border-indigo-600 px-2 py-3 text-xs font-semibold text-indigo-600">
          Overview
        </button>

        <button className="px-2 py-3 text-xs text-slate-400 hover:text-indigo-600">
          Courses
        </button>

        <button className="px-2 py-3 text-xs text-slate-400 hover:text-indigo-600">
          Payments
        </button>

        <button className="px-2 py-3 text-xs text-slate-400 hover:text-indigo-600">
          History
        </button>

      </div>

      {/* ================= CONTENT ================= */}
      <div className="space-y-6 p-5">

        {/* Personal Information */}
        <section>

          <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-800">
            👤
            Personal Information
          </h3>

          <div className="space-y-3 text-sm">

            <div className="flex justify-between gap-4">
              <span className="text-slate-400">
                Full Name
              </span>

              <span className="text-right font-medium text-slate-700">
                {student.name}
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-slate-400">
                Student ID
              </span>

              <span className="font-medium text-slate-700">
                STU-{String(student.id).padStart(3, "0")}
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-slate-400">
                Email
              </span>

              <span className="max-w-[190px] truncate font-medium text-slate-700">
                {student.email}
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-slate-400">
                Phone
              </span>

              <span className="font-medium text-slate-700">
                {student.phone}
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-slate-400">
                Enrollment Date
              </span>

              <span className="font-medium text-slate-700">
                {student.enrollmentDate}
              </span>
            </div>

          </div>
        </section>

        {/* Enrolled Courses */}
        <section>

          <div className="mb-3 flex items-center justify-between">

            <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              📚
              Enrolled Course
            </h3>

            <button className="text-xs font-medium text-indigo-600 hover:text-indigo-700">
              View All
            </button>

          </div>

          <div className="rounded-lg border border-slate-100 p-3">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  🎓
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-700">
                    {getCourseName
                      ? getCourseName(student.courseId)
                      : `Course ${student.courseId}`}
                  </p>

                  <p className="text-xs text-slate-400">
                    Enrolled course
                  </p>
                </div>

              </div>

              <span className="rounded-full bg-indigo-50 px-2 py-1 text-[10px] font-medium text-indigo-600">
                Active
              </span>

            </div>

          </div>

        </section>

        {/* Payment Summary */}
        <section>

          <div className="mb-3 flex items-center justify-between">

            <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              💳
              Payment Summary
            </h3>

            <button className="text-xs font-medium text-indigo-600 hover:text-indigo-700">
              View All
            </button>

          </div>

          <div className="space-y-3">

            <div className="flex justify-between text-sm">
              <span className="text-slate-400">
                Total Fee
              </span>

              <span className="font-semibold text-slate-700">
                {totalFee.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-slate-400">
                Amount Paid
              </span>

              <span className="font-semibold text-emerald-600">
                {amountPaid.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-slate-400">
                Balance
              </span>

              <span className="font-semibold text-red-500">
                {balance.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-slate-400">
                Payment Status
              </span>

              <span
                className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                  student.paymentStatus === "Paid"
                    ? "bg-emerald-50 text-emerald-600"
                    : student.paymentStatus === "Partial"
                    ? "bg-amber-50 text-amber-600"
                    : "bg-red-50 text-red-600"
                }`}
              >
                {student.paymentStatus}
              </span>
            </div>

          </div>

        </section>

        {/* Buttons */}
        <div className="space-y-2 pt-2">

          <button
            onClick={() => onEdit(student)}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
          >
            ✎
            Edit Student
          </button>

          <button
            onClick={() => onDelete(student.id)}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-red-300 bg-white px-4 py-2.5 text-sm font-medium text-red-500 transition hover:bg-red-50"
          >
            🗑
            Delete Student
          </button>

        </div>

      </div>
    </div>
  );
}

export default StudentDetails;