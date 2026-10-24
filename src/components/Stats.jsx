
function Stats({ tasks }) {
  const completedCount = tasks.filter((task) => task.completed).length;
  const pendingCount = tasks.filter((task) => !task.completed).length;
  const completionRate =
    tasks.length === 0 ? 0 : (completedCount / tasks.length) * 100;

  return (
    <div className="stats-container">
      <div className="stat-card">
        <p>Toplam görev sayısı:</p>
        <h2>{tasks.length}</h2>
      </div>

      <div className="stat-card">
        <p>Tamamlanan görev sayısı:</p>
        <h2>{completedCount}</h2>
      </div>

      <div className="stat-card">
        <p>Bekleyen görev sayısı:</p>
        <h2>{pendingCount}</h2>
      </div>

      <div className="stat-card">
        <p>Tamamlanma yüzdesi:</p>
        <h2>%{Math.round(completionRate)}</h2>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${completionRate}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default Stats;
