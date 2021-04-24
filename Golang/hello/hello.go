package main

import "fmt"

func main() {
	defer fmt.Println(("1st"))
	fmt.Println("this is a test to make sure golang is working")
	cor := "ok"
	fmt.Println(cor)

	m := make(map[string]int)

	m["test"] = 2

	fmt.Println((m))
}
