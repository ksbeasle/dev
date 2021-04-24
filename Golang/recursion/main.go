package main

import "fmt"

func main() {
	fmt.Println(fact(3))
}

// 3 * fact (2) == 3 * 2 = 6
// 2 * fact(1) == 2 * 1 = 2
// fact(0) == 1
func fact(num int) int {
	if num == 0 {
		return 1
	}

	return num * fact(num-1)
}
