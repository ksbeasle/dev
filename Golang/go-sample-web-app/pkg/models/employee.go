package models

type Employee struct {
	ID        int    `bson:"id"`
	FirstName string `bson:"firstName, omitempty"`
	LastName  string `bson:"lastName, omitempty"`
	Position  string `bson:"position, omitEmpty"`
	Salary    string `bson:"salary, omitempty"`
	Email     string `bson:"email, omitempty"`
	Manager   string `bson:"manager, omitempty"`
}
