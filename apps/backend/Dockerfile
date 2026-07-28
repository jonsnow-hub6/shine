FROM alpine:latest

WORKDIR /pb

COPY pocketbase .
COPY pb_data pb_data
COPY pb_hooks pb_hooks

EXPOSE 8090

CMD ["./pocketbase", "serve", "--http=0.0.0.0:8090"]
