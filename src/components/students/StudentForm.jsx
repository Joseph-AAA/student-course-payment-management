import { useEffect, useState } from "react";

function StudentForm({
  onAddStudent,
  onUpdateStudent,
  onClose,
  editingStudent,
}) {
  const emptyForm = {
    name: "",
    email: "",
    phone: "",
    courseId: "",
    courseName: "",
    enrollmentDate: "",
    paymentStatus: "Pending",
    totalFee: "",
    amountPaid: "",
    status: "Active",
  };

  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    if (editingStudent) {
      setFormData({
        ...emptyForm,
        ...editingStudent,
      });
    } else {
      setFormData(emptyForm);
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in the required fields.");
      return;
    }

    if (editingStudent) {
      onUpdateStudent({
        ...formData,
        id: editingStudent.id,
        courseId: Number(formData.courseId),
        totalFee: Number(formData.totalFee),
        amountPaid: Number(formData.amountPaid),
      });
    } else {
      onAddStudent({
        ...formData,
        id: Date.now(),
        courseId: Number(formData.courseId),
        totalFee: Number(formData.totalFee),
        amountPaid: Number(formData.amountPaid),
      });
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">

      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl">

        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              {editingStudent ? "Edit Student" : "Add New Student"}
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              {editingStudent
                ? "Update student information"
                : "Add a new student to the system"}
            </p>
          </div>

          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700"
          >
            ×
          </button>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-5 p-6 md:grid-cols-2"
        >

          {/* NAME */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Student Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter student name"
              className="input-field"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="input-field"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Phone
            </label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="input-field"
            />
          </div>

          {/* COURSE */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Course
            </label>

            <input
              type="text"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
              placeholder="Example: Web Development"
              className="input-field"
            />
          </div>

          {/* COURSE ID */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Course ID
            </label>

            <input
              type="number"
              name="courseId"
              value={formData.courseId}
              onChange={handleChange}
              placeholder="Example: 1"
              className="input-field"
            />
          </div>

          {/* DATE */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Enrollment Date
            </label>

            <input
              type="date"
              name="enrollmentDate"
              value={formData.enrollmentDate}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          {/* PAYMENT STATUS */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Payment Status
            </label>

            <select
              name="paymentStatus"
              value={formData.paymentStatus}
              onChange={handleChange}
              className="input-field"
            >
              <option value="Pending">Pending</option>
              <option value="Partial">Partial</option>
              <option value="Paid">Paid</option>
            </select>
          </div>

          {/* STUDENT STATUS */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Student Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="input-field"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Pending">Pending</option>
            </select>
          </div>

          {/* TOTAL FEE */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Total Fee
            </label>

            <input
              type="number"
              name="totalFee"
              value={formData.totalFee}
              onChange={handleChange}
              placeholder="Enter total fee"
              className="input-field"
            />
          </div>

          {/* AMOUNT PAID */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Amount Paid
            </label>

            <input
              type="number"
              name="amountPaid"
              value={formData.amountPaid}
              onChange={handleChange}
              placeholder="Enter amount paid"
              className="input-field"
            />
          </div>

          {/* BUTTONS */}
          <div className="flex justify-end gap-3 border-t border-slate-100 pt-5 md:col-span-2">

            <button
              type="button"
              onClick={onClose}
              className="secondary-button"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="primary-button"
            >
              {editingStudent ? "Update Student" : "Add Student"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default StudentForm;