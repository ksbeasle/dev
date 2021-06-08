package main

import (
	"io"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {

	// gorilla mux router
	router := mux.NewRouter()

	// Health Check
	healthCheck := func(w http.ResponseWriter, req *http.Request) {
		io.WriteString(w, "Pong")
	}

	// Handlers
	router.HandleFunc("/ping", healthCheck)

	// Start server
	log.Println("Starting server ... on port 8080")
	log.Fatal(http.ListenAndServe(":8080", router))
}
