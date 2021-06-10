package main

import (
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	// Error var - used for checking env/server etc.
	var err error

	// Load env variables
	err = godotenv.Load("../../.env")
	if err != nil {
		log.Fatal("Error loading .env vars.")
	}

	// Get PORT env var if empty manually set it
	PORT := os.Getenv("PORT")
	if PORT == "" {
		PORT = ":8080"
	}

	serve := &http.Server{
		Addr:    PORT,
		Handler: routes(),
	}
	// Start server
	log.Printf("Starting server ... on port - %s", PORT)

	err = serve.ListenAndServe()
	if err != nil {
		log.Fatal(err)
	}
}
