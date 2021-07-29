package database

import (
	"context"
	"fmt"
	"log"
	"os"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

func ConnectDb() {
	DB_URL := os.Getenv("DB_URL")
	// MONGO_DB := os.Getenv("MONGO_DB")
	fmt.Println(DB_URL)
	client, err := mongo.NewClient(options.Client().ApplyURI(DB_URL))
	if err != nil {
		log.Fatal(err)
	}
	ctx, _ := context.WithTimeout(context.Background(), 60*time.Second)
	err = client.Connect(ctx)
	if err != nil {
		log.Fatal(err)
	}
	defer client.Disconnect(ctx)
	err = client.Ping(ctx, readpref.Primary())
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("done")
	// databases, err := client.ListDatabaseNames(ctx, bson.M{})
	// if err != nil {
	// 	log.Fatal(err)
	// }
	// fmt.Println(databases)

	// user := models.User{
	// 	Uuid:     "0",
	// 	Username: "test0",
	// 	Password: "test0",
	// }

	// database := client.Database(MONGO_DB)
	// // employeesCollection := database.Collection("employees")
	// usersCollection := database.Collection("users")

	// insertResult, err := usersCollection.InsertOne(ctx, user)
	// if err != nil {
	// 	panic(err)
	// }
	// fmt.Println(insertResult.InsertedID)

}
