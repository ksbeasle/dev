package main

import (
	"net/http"

	"github.com/gorilla/mux"
)

func routes() http.Handler {
	// gorilla mux router
	router := mux.NewRouter()

	router.HandleFunc("/ping", HealthCheck)
	router.HandleFunc("/", GetAll)

	return router
}
