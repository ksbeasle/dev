# Golang Sample Web Application

cd cmd/app and run command:
```go run *.go```


curl example:
```
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"Uuid":1, "Username":"xyz","Password":"xyz"}' \
  http://localhost:8081/signup
  ```