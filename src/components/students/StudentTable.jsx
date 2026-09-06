function StudentTable({
  students,
  onView,
  onEdit,
  onDelete,
  getCourseName,
}) {
  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : "?";
  };

  const getPaymentStyle = (status) => {
    if (status === "Paid") {
      return "bg-emerald-50 text-emerald-600";
    }

    if (status === "Partial") {
      return "bg-amber-50 text-amber-600";
    }

    return "bg-red-50 text-red-600";
  };

  const getStatusStyle = (status) => {
    if (status === "Active") {
      return "bg-emerald-50 text-emerald-600";
    }

    if (status === "Inactive") {
      return "bg-slate-100 text-slate-500";
    }

    return "bg-amber-50 text-amber-600";
  };

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}
      <div className="border-b border-slate-100 px-5 py-4">
        <h2 className="font-semibold text-slate-900">
          Student List
        </h2>

        <p className="mt-1 text-xs text-slate-400">
          Manage registered students
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full min-w-[900px]">

          <thead className="bg-slate-50">
            <tr className="border-b border-slate-100">

              <th className="w-12 px-4 py-3 text-left">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300"
                />
              </th>

              <th className="px-3 py-3 text-left text-xs font-semibold text-slate-500">
                #
              </th>

              <th className="px-3 py-3 text-left text-xs font-semibold text-slate-500">
                Student
              </th>

              <th className="px-3 py-3 text-left text-xs font-semibold text-slate-500">
                Email
              </th>

              <th className="px-3 py-3 text-left text-xs font-semibold text-slate-500">
                Course
              </th>

              <th className="px-3 py-3 text-left text-xs font-semibold text-slate-500">
                Status
              </th>

              <th className="px-3 py-3 text-left text-xs font-semibold text-slate-500">
                Payment
              </th>

              <th className="px-3 py-3 text-center text-xs font-semibold text-slate-500">
                Actions
              </th>

            </tr>
          </thead>

          <tbody>

            {students.length === 0 ? (
              <tr>
                <td
                  colSpan="8"
                  className="px-4 py-12 text-center text-sm text-slate-400"
                >
                  No students found.
                </td>
              </tr>
            ) : (
              students.map((student, index) => {

                const studentStatus = student.status || "Active";

                return (
                  <tr
                    key={student.id}
                    className="border-b border-slate-100 transition hover:bg-slate-50"
                  >

                    {/* Checkbox */}
                    <td className="px-4 py-4">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-slate-300"
                      />
                    </td>

                    {/* Number */}
                    <td className="px-3 py-4 text-sm text-slate-500">
                      {index + 1}
                    </td>

                    {/* Student */}
                    <td className="px-3 py-4">
                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-600">
                          {getInitial(student.name)}
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-slate-800">
                            {student.name}
                          </p>

                          <p className="text-xs text-slate-400">
                            STU-{String(student.id).padStart(3, "0")}
                          </p>
                        </div>

                      </div>
                    </td>

                    {/* Email */}
                    <td className="px-3 py-4 text-sm text-slate-500">
                      {student.email}
                    </td>

                    {/* Course */}
                    <td className="px-3 py-4">
                      <span className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
                        {getCourseName
                          ? getCourseName(student.courseId)
                          : `Course ${student.courseId}`}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-3 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${getStatusStyle(
                          studentStatus
                        )}`}
                      >
                        {studentStatus}
                      </span>
                    </td>

                    {/* Payment */}
                    <td className="px-3 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${getPaymentStyle(
                          student.paymentStatus
                        )}`}
                      >
                        {student.paymentStatus}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-3 py-4">
                      <div className="flex justify-center gap-2">

                        <button
                          onClick={() => onView(student)}
                          title="View"
                          className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition hover:bg-indigo-50 hover:text-indigo-600"
                        >
                          👁
                        </button>

                        <button
                          onClick={() => onEdit(student)}
                          title="Edit"
                          className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition hover:bg-emerald-50 hover:text-emerald-600"
                        >
                          ✎
                        </button>

                        <button
                          onClick={() => onDelete(student.id)}
                          title="Delete"
                          className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition hover:bg-red-50 hover:text-red-600"
                        >
                          🗑
                        </button>

                      </div>
                    </td>

                  </tr>
                );
              })
            )}

          </tbody>
        </table>
      </div>

      {/* Footer / Pagination */}
      <div className="flex flex-col gap-3 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

        <p className="text-xs text-slate-400">
          Showing {students.length} students
        </p>

        <div className="flex items-center gap-1">

          <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-sm text-slate-500 hover:bg-slate-50">
            ‹
          </button>

          <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-medium text-white">
            1
          </button>

          <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-sm text-slate-500 hover:bg-slate-50">
            2
          </button>

          <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-sm text-slate-500 hover:bg-slate-50">
            3
          </button>

          <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-sm text-slate-500 hover:bg-slate-50">
            ›
          </button>

        </div>

      </div>

    </div>
  );
}

export default StudentTable;