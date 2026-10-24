
function Stats({ tasks }) {
  const completedCount = tasks.filter((task) => task.completed).length;
  const completionRate =
    tasks.length === 0 ? 0 : (completedCount / tasks.length) * 100;

  return (
    <div className="stats-container">
      <div className="stat-card total-card">
        <div className="stat-icon total-icon">▤</div>

        <div className="stat-info">
          <p>Toplam Görev</p>
          <h2 className="stat-value">{tasks.length}</h2>
        </div>
      </div>

      <div className="stat-card completed-card">
        <div className="stat-icon completed-icon">✓</div>

        <div className="stat-info">
          <p>Tamamlanan Görev</p>
          <h2 className="stat-value">{completedCount}</h2>

          <p className="completion-label">
            %{Math.round(completionRate)} tamamlandı
          </p>

          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={Math.round(completionRate)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Görevlerin tamamlanma oranı"
          >
            <div
              className="progress-fill"
              style={{ width: `${completionRate}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
