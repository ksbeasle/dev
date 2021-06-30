package main

import (
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"

	models "github.com/ksbeasle/go-sample-web-app/pkg/models"
)

type test_struct struct {
	Test string
}

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
	reqBody, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Println(err)
		return
	}
	//
	var user = models.User{}
	err = json.Unmarshal(reqBody, &user)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(user)

}
