const POCKETBASE_URL =
  process.env.POCKETBASE_URL || "http://localhost:8090";

const alertExample = {
  title: process.env.TITLE || "Test Alert",
  severity: process.env.SEVERITY || "warning",
  source: process.env.SOURCE || "manual-test",
  message:
    process.env.MESSAGE ||
    "This is a test alert from the CLI script",
  timestamp: new Date().toISOString(),
};

async function sendAlert() {
  const response = await fetch(
    `${POCKETBASE_URL}/api/collections/alerts/records`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(alertExample),
    }
  );

  if (!response.ok) {
    const error = await response.text();

    console.error(
      "Failed sending alert:",
      error
    );

    process.exit(1);
  }

  const result = await response.json();

  console.log("Alert created:");
  console.log(result);
}

sendAlert();
