package main

import (
	"io"
	"net/http"
)

func HealthCheck(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, "Pong!")

}
