# Test 2

Thematic : back office

## Context

[This database](database/top-500-most-rented-movies.csv) (csv file) is a list of rented movies in a DVD media shop. Each recording is described by the following properties :

|Field| Description|
| :--------------- |:---------------|
|annee|Year|
|nbre_de_prets|Number of rentals for each year*|
|titre|Movie Title|
|auteur|Autor|
|editeur|Editor|
|indice|Technical reference**|
|bib|Don't know and don't care :-D|
|cote|Physical reference on the support**|
|cat_1|Audience: Adult(A), Child(E) or Baby(BB)|
|cat_2|Type of support, always DVD|

****A single movie can appear several times, once per year of its rental***

*****This field usually contains 2 informations based on the following syntax : "MOVIE_STYLE" "TITLE_FIRST_4_CHARACTERS". Sometimes, the STYLE is missing.*** :-(


FYI, here is the *MOVIE_STYLE* classification:

|Field|Description|
| :--------------- |:---------------|
|A or Anime |Cartoon or animated movie|
|P|Thriller|
|SF|Science Fiction|
|G|War|
|C|Comedy|
|H|Historic|
|F|Fantastic|


## Goal: build an API

You have to build an API that will provide following functionalities:

- Get all movie list
- Get the most top 100 rented movies for a specific year
- Get the most top 100 rented movies for all time
- Get the most rented movie for a specific year
- Get the most rented movie for all time
- Get the author of the most rented movies for all time
- Get the movie list searching by partial title


#### Optional:
- Increase the rented counter for a specific film and year
- Add a new movie to database

## Constraint:

- Javascript
- Framework: as you like :-)
- Be able to justify every choice you've made

Everything not listed above is up to your mind !

## How to send your work
Send the link of your work on your Git repo at job@neomanis.io  
Or zip it and send it by mail if it's under 10MB  
Or use a shared file solution and send us the link.
