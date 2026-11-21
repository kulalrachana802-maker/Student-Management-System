
export default function ReportsPage({ students }) {
  const first = students.filter(s => s.year === "1st Year").length;
  const second = students.filter(s => s.year === "2nd Year").length;
  const third = students.filter(s => s.year === "3rd Year").length;

  return (
    <main className="page">
      <h1>Student Reports</h1>

      <div className="report-grid">
        <div className="report-card">
          <h3>Total Students</h3>
          <strong>{students.length}</strong>
        </div>

        <div className="report-card">
          <h3>First Year</h3>
          <strong>{first}</strong>
        </div>

        <div className="report-card">
          <h3>Second Year</h3>
          <strong>{second}</strong>
        </div>

        <div className="report-card">
          <h3>Third Year</h3>
          <strong>{third}</strong>
        </div>
      </div>

      <button className="button" onClick={() => window.print()}>
        Print Reports
      </button>
    </main>
  );
}
