import {
  Card,
  Collapse,
  Flex,
  Tag,
  Typography,
} from "antd";

import {
  useAlerts,
} from "../hooks/useAlerts";
import { alertSeverityConfig } from "../consts";




const { Text } = Typography;


export default function AlertSidebar() {

  const alerts = useAlerts();


  return (
    <Card
      title={`Alerts (${alerts.length})`}
      style={{
        height: "100%",
      }}
      styles={{
        body: {
          padding: 8,
          height: "calc(100% - 57px)",
          overflow: "auto",
        },
      }}
    >

      <Flex
        vertical
        gap={10}
      >

        {
          alerts.map((alert) => {

            const severity =
              alertSeverityConfig[
                alert.severity
              ];


            return (

              <Card
                key={alert.id}
                size="small"

                style={{
                  borderLeft:
                    `5px solid ${severity.color}`,

                  background:
                    `${severity.color}12`,
                }}
              >

                <Collapse
                  bordered={false}
                  ghost
                  items={[
                    {
                      key: alert.id,


                      label:(

                        <Flex
                          align="center"
                          gap={8}
                          style={{
                            width:"100%",
                          }}
                        >

                          <Tag
                            color={severity.tag}
                          >
                            {severity.label}
                          </Tag>


                          <Text
                            strong
                            ellipsis
                            style={{
                              flex:1,
                            }}
                          >
                            {alert.title}
                          </Text>

                        </Flex>

                      ),


                      children:(

                        <Flex
                          vertical
                          gap={8}
                        >

                          <div>
                            <Text strong>
                              Message
                            </Text>

                            <div>
                              {alert.message}
                            </div>
                          </div>



                          <div>
                            <Text strong>
                              Created:
                            </Text>

                            {" "}

                            {
                              new Date(
                                alert.timeOfCreation
                              )
                              .toLocaleString()
                            }
                          </div>


                          <div>
                            <Text strong>
                              Alert ID:
                            </Text>

                            {" "}
                            {alert.id}
                          </div>


                         
                        </Flex>

                      ),
                    },
                  ]}
                />

              </Card>

            );
          })

        }

      </Flex>

    </Card>
  );
}
