import { useEffect, useState } from "react";
import { pb } from "../../services/pocketbase";
import { Alert } from "../types";

export function useAlerts() {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    async function loadInitial() {
      const records = await pb
        .collection("alerts")
        .getList<Alert>(1, 50, {
          sort: "-created",
        });

      setAlerts(records.items);
    }

    loadInitial();

    const unsubscribe = pb
      .collection("alerts")
      .subscribe<Alert>("*", (event) => {
        if (event.action === "create") {
          setAlerts((current) => [
            event.record,
            ...current,
          ]);
        }
      });

    return () => {
      unsubscribe.then((fn) => fn());
    };
  }, []);

  return alerts;
}
