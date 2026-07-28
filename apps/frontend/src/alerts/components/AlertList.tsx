import { useAlerts } from "../hooks/useAlerts";

export function AlertsList() {
  const alerts = useAlerts();

  return (
    <div>
      <h1>Alerts</h1>

      {alerts.map((alert) => (
        <div key={alert.id}>
          <h3>{alert.title}</h3>

          <p>
            Severity:
            {alert.severity}
          </p>

          <p>
            {alert.message}
          </p>

          <small>
            {alert.timeOfCreation}
          </small>
        </div>
      ))}
    </div>
  );
}
