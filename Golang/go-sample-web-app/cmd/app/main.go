package main

import (
	"log"
	"net/http"
)

func main() {

	serve := &http.Server{
		Addr:    ":8080",
		Handler: routes(),
	}
	// Start server
	log.Println("Starting server ... on port 8080")
	err := serve.ListenAndServe()
	if err != nil {
		log.Fatal(err)
	}
}
