# Skapa en Todolist

I dagens uppgift ska ni få öva på state och callback-funktioner genom att skapa en todo list.

### Sätt upp projektet

1. Öppna en terminal och gå med `cd` där du vill skapa projektet.
2. Skriv `npm create vite@latest todolist -- --template react`.
3. Gå in i projektet: `cd todolist`.
4. Installera dependencies: `npm install`.

## Hur du klarar uppgiften

1. All data ska finnas i state i App.jsx. Datat ska bestå av en array av objekt. Varje objekt ska bestå av en sträng: `title`, en boolean: `done` och ett nummer: `id`. Från början ska state bestå av en tom array.

2. Skapa ett input fält och en Add-knapp som lägger till nya todo-objekt till arrayen i state.

3. Skapa jsx som ritar ut alla objekt som finns i arrayen i state. För detta används en map-funktion och en TodoItem-komponent. Varje TodoItem ska visa på ett grafiskt sätt om den är gjord eller inte gjord.

4. TodoItem-komponenten ska ha en knapp som uppdaterar värdet: `done` i todo-objektet från false till true eller tvärtom. För detta används en callback funktion som tar ett id och ett done-värde som input.

5. TodoItem-komponenten ska ha en delete-knapp som raderar todo-objektet från state. För detta används en callback funktion som tar ett id som input.

## Hur du lämnar in

1. Skapa ett repo på github.
2. Ladd up dina filer till github:

```
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin <Adressen till ditt repo>
git push -u origin main
```

3. Klicka på uppgiften i canvas och ange länken till ditt repo.

---

### :boom: Success!

Efter denna uppgift ska ni kunna använda state och callback-funktioner i react.

---

### :runner: Extrauppgifter

Klar? Här är lite mer att göra:

1. Använd localStorage för att spara och återskapa data.
