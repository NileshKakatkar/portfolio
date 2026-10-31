package main

import (
	"log"
	"net/http"
	"os"
)

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/api/profile", func(w http.ResponseWriter, r *http.Request) {
		b, err := os.ReadFile("../src/data/profile.json")
		if err != nil {
			http.Error(w, "profile not found", http.StatusInternalServerError)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		w.Write(b)
	})

	mux.Handle("/", http.FileServer(http.Dir("../dist")))

	log.Println("listening on :8080")
	log.Fatal(http.ListenAndServe(":8080", mux))
}
