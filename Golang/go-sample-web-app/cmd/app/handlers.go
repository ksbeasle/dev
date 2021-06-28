package main

import (
	"fmt"
	"io"
	"net/http"
)

// Check app
func HealthCheck(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, "Pong!")
}

func Add(w http.ResponseWriter, r *http.Request) {

}

func Get(w http.ResponseWriter, r *http.Request) {

}

func GetAll(w http.ResponseWriter, r *http.Request) {

}

func Update(w http.ResponseWriter, r *http.Request) {

}

func Remove(w http.ResponseWriter, r *http.Request) {

}

func Login(w http.ResponseWriter, r *http.Request) {

}

func Signup(w http.ResponseWriter, r *http.Request) {
	// code := mux.Vars(r)["code"]
	// fmt.Println(code)

	// TODO: Json decoder
	fmt.Println(r.Body)

}
