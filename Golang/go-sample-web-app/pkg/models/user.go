package models

type User struct {
	Uuid     string `bson:"uuid"`
	Username string `bson:"firstName, omitempty"`
	Password string `bson:"lastName, omitempty"`
}
