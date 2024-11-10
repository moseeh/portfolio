package main

import (
	"html/template"
	"log"
	"net/http"
)

type Project struct {
	Title       string
	Description string
	GitHubURL   string
}

type PageData struct {
	Name         string
	Title        string
	About        string
	Skills       []string
	Projects     []Project
	ContactEmail string
}

func main() {
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	http.HandleFunc("/", handleHome)

	log.Println("Server starting on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func handleHome(w http.ResponseWriter, r *http.Request) {
	data := PageData{
		Name:  "MOSES OTIENO",
		Title: "Apprentice Software Developer at Zone 01 Kisumu",
		About: "A passionate developer with experience in Go, JavaScript, Rust and web technologies.",
		Skills: []string{
			"Go", "JavaScript", "HTML", "CSS", "Rust",
			"Git", "REST APIs", "PostgreSQL",
		},
		Projects: []Project{
			{
				Title:       "Go Projects",
				Description: "These are projects I have done in Golang using the zone 01 kisumu Pedagogy",
				GitHubURL:   "https://github.com/moseeh/Go-Projects",
			},
			{
				Title:       "my-ls",
				Description: "A program that mimics the linux command line tool(ls). This program lists entries in any specified path using flags",
				GitHubURL:   "https://github.com/moseeh/Go-Projects/tree/main/my-ls-1",
			},
			{
				Title: "lem-in",
				Description: "A program that descibes an ant colony and generates paths and turns ants need to make from start to end",
				GitHubURL: "https://github.com/moseeh/Go-Projects/tree/main/lem-in",
			},
		},
		ContactEmail: "mosesadrian825@gmail.com",
	}

	tmpl := template.Must(template.ParseFiles("templates/index.html"))
	tmpl.Execute(w, data)
}
