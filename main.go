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
	Twitter      string
	LinkedIn     string
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
		Name:  "MOSES OTIENO ONYANGO",
		Title: "Apprentice Software Developer at Zone01 Kisumu",
		About: "I am an apprentice software developer at Zone 01 Kisumu with a passion for building efficient and innovative solutions. With experience in languages like Go, JavaScript, and Rust, I enjoy tackling challenging problems and constantly learning new tools and frameworks. I have worked on projects that involve systems programming, web development, and command-line tools, gaining hands-on experience with the full stack. My goal is to deepen my expertise in software development while contributing to projects that make a positive impact. I am driven by curiosity, dedication, and a commitment to developing practical, user-friendly software solutions.",

		Skills: []string{
			"Go", "JavaScript", "HTML", "CSS", "Rust", "Programming",
			"Git", "REST APIs", "SQLite", "Docker", "Unix", "Ai", "Statistics",
		},
		Projects: []Project{
			{
				Title:       "Go Projects",
				Description: "These are projects I have done in Golang using the zone01 kisumu Pedagogy",
				GitHubURL:   "https://github.com/moseeh/Go-Projects",
			},
			{
				Title:       "my-ls",
				Description: "A program that mimics the linux command line tool(ls). This program lists entries in any specified path using flags",
				GitHubURL:   "https://github.com/moseeh/Go-Projects/tree/main/my-ls-1",
			},
			{
				Title:       "lem-in",
				Description: "A program that descibes an ant colony and generates paths and turns ants need to make from start to end",
				GitHubURL:   "https://github.com/moseeh/Go-Projects/tree/main/lem-in",
			},
			{
				Title:       "my-Sudoku",
				Description: "A program that uses the backtracking algorithm to solve the sudoku puzzle",
				GitHubURL:   "https://github.com/moseeh/my-sudoku",
			},
			{
				Title:       "Kilimo-chain",
				Description: "A blockchain based program that offers transparency of goods from the farm to the market",
				GitHubURL:   "https://github.com/moseeh/kilimo-link",
			},
			{
				Title:       "Groupie Tracker",
				Description: "A Go-based Program that reads data from a JSON API and displays it on a webpage",
				GitHubURL:   "https://github.com/moseeh/Go-Projects/tree/main/groupie-tracker",
			},
		},
		ContactEmail: "mosesadrian825@gmail.com",
		Twitter:      "mosesotienoo",
		LinkedIn:     "moses-otieno-7a24b8248",
	}

	tmpl := template.Must(template.ParseFiles("templates/index.html"))
	tmpl.Execute(w, data)
}
