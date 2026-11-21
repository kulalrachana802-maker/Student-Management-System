
export default function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="/">Student Manager</a>

      <nav aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/students">Students</a>
        <a href="/courses" className="action-button courses-button">📚 Courses</a>
        <a href="/reports" className="action-button reports-button">📊 Reports</a>
        <a href="/add-student" className="action-button add-button">➕ Add Student</a>
        <a href="/attendance" className="action-button attendance-button">📅 Attendance</a>
        <a href="/fees" className="action-button fees-button">💰 Fees</a>
        <a href="/exams" className="action-button exams-button">📝 Exams</a>

        <button
          className="action-button print-button"
          onClick={() => window.print()}
        >
          🖨️ Print
        </button>
      </nav>
    </header>
  );
}
