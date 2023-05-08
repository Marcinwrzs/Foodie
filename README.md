## Backend

API do projektu: https://gitlab.com/admflk/api-hr-board

## Frontend

W folderze /frontend znajdziesz startowe pliki do pracy z React + TypeScript wraz z konfiguracją eslinta i prettiera - narzędzi do automatycznego wykrywania poprawności kodu.

# Gitflow

![alt text](./../tasks/gitflow/gitflow-mentoring.PNG)

Będąc na gałęzi `main` upewnij się, że masz pobrane ostatnie zmiany:

`git pull`

Stwórz branch pod konkretne zadanie:

`git checkout -b feature/nazwa-zadania main`

Sprawdź jakie zmiany zostały wprowadzone:

`git status`

Dodaj zmiany do commita:

`git add .`

Zacommituj zmiany:

`git commit -m "What effect have my changes made?"`

Wyślij lokalne zmiany na repozytorium:

`git push origin feature/nazwa-zadania`

# Sesje z mentorem

- domyślny czas trwania spotkania online to 1 godzina
- możliwe jest przedłużenie o 30 minut za zgodą mentora
- spotkanie trwające dłużej niż 1h 30 min nie jest rekomendowane (dla obu stron)
- spotkania z mentorem nie mogą być nagrywane w żadnej formie
- mentor nie może bezpośrednio realizować za ucznia zadań rekrutacyjnych oraz zadań z jego pracy, może natomiast pomagać zrozumieć techniczne aspekty analogicznych problemów, które pomogą w rozwiązywaniu zadań rekrutacyjnych i zadań z pracy
- punktualność i szanowanie czasu: jeśli uczeń zmienia ustalony już termin zajęć wówczas prosimy o informacje o przełożeniu (calendly/mail/telefon) co najmniej 12h przed umówionymi zajęciami. W przeciwnym przypadku zajęcia będą przepadać
- zajęcia przepadają również w sytuacji gdy osoba nie pojawi się na zajęciach, a nie przekazała z min. 12h wyprzedzeniem informacji o nieobecności, nie odwołała spotkania
- w przypadku, gdy mentor odwoła zajęcia w ostatniej chwili (mniej niż 12h przed umówionym terminem), otrzymujesz darmową dodatkową godzinę zajęć

# Dobre praktyki Code Review
- https://docs.gitlab.com/ee/development/code_review.html#the-responsibility-of-the-reviewer
- https://docs.gitlab.com/ee/development/code_review.html#the-responsibility-of-the-maintainer


# Getting Started with Foodie App

### Hosting

This project has been deployed as a website on Netlify.
Please visit below address to see results:

##### `https://foodie-reactapp.netlify.app/`

![image](https://user-images.githubusercontent.com/77743373/218255426-d1918ff9-86e0-4ccb-9e97-7a616108db7e.png)


## Installation and Setup Instructions

Clone down this repository. You will need node and npm installed globally on your machine.

Installation project:

`npm install`

To start server::

`npm start`

Runs the app in the development mode.

Open `http://localhost:3000` to view it in your browser.

### About The Foodie App

Foodie is an application written with RWD standards with recipes from the external API Spoonacular.com. You can find the popular recipes or look for them by a category or specific name. If any position will be interesting, click on the image and you will see the description, instructions and ingredients! You can also add them to favorites, which will be saved in your local storage.

### Technologies

Technologies which have been used for this app: `react` with `hooks` and `react-router`, components have been styled by `styled-components`, external `API`, some functions have been moved to the `GlobalContext` section and handled by `Reducers`. Slider on the main page has been made by `Splidejs`.
