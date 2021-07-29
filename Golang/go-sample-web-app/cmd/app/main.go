package main

import (
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	db "github.com/ksbeasle/go-sample-web-app/pkg/database"
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

	// Start DB
	db.ConnectDb()

	// ignore the error that routes() shows its within the same package (main) and works fine
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
