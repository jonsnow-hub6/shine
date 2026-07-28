import {
  Card,
  Button,
  Empty,
  Flex,
  Tag,
  Typography,
} from "antd";

import {
  CheckOutlined,
} from "@ant-design/icons";

import { confirmAlert } from "../alertsSlice";
import { useAppDispatch, useAppSelector } from "../../../app/store";


const severityConfig = {
  critical: {
    color: "red",
    label: "Critical",
  },
  warning: {
    color: "gold",
    label: "Warning",
  },
  info: {
    color: "blue",
    label: "Info",
  },
};


export default function ActiveAlerts() {
  const dispatch = useAppDispatch();

  const alerts = useAppSelector(
    (state) => state.alerts.pending
  );


  return (
    <Card
      title={`Active Alerts (${alerts.length})`}
      style={{
        height: "100%",
      }}
      styles={{
        body: {
          height: "calc(100% - 57px)",
          overflow: "auto",
        },
      }}
    >
      {alerts.length === 0 ? (
        <Empty description="No active alerts" />
      ) : (

        <Flex
          vertical
          gap={12}
        >
          {alerts.map((alert) => {

            const severity =
              severityConfig[alert.severity];


            return (
              <Card
                key={alert.id}
                className={
                  alert.isNew
                    ? "alert-critical"
                    : ""
                }
                size="small"
                style={{
                  borderLeft:
                    `5px solid ${
                      alert.severity === "critical"
                        ? "#ff4d4f"
                        : alert.severity === "warning"
                        ? "#f5b700"
                        : "#1677ff"
                    }`,
                }}
              >

                <Flex
                  justify="space-between"
                  align="start"
                  gap={16}
                >

                  <Flex
                    vertical
                    style={{
                      minWidth: 0,
                    }}
                  >

                    <Flex gap={8} align="center">

                      <Tag
                        color={severity.color}
                      >
                        {severity.label}
                      </Tag>


                      <Typography.Text
                        strong
                        ellipsis
                      >
                        {alert.title}
                      </Typography.Text>

                    </Flex>


                    <Typography.Paragraph
                      style={{
                        marginTop: 8,
                        marginBottom: 8,
                      }}
                    >
                      {alert.message}
                    </Typography.Paragraph>


                    <Typography.Text
                      type="secondary"
                    >
                      {new Date(
                        alert.timeOfCreation
                      ).toLocaleString()}
                    </Typography.Text>

                  </Flex>


                  <Button
                    type="primary"
                    icon={<CheckOutlined />}
                    onClick={() =>
                      dispatch(
                        confirmAlert(alert.id)
                      )
                    }
                  >
                    Confirm
                  </Button>

                </Flex>

              </Card>
            );
          })}
        </Flex>

      )}
    </Card>
  );
}
