# Weightalyzer v 1.0

The [live website](http://weightalyzer.herokuapp.com/#/) is designed for viewing on your mobile device.
<br></br>

### Description
Weightalyzer is a cloud-based, easy-to-use, lightweight weight recording app that allows a user to record their body weight.  After logging in, the user can record a weight.  After recording a weight, the user can then see statics on their weight in both in a table and in a graph.  In this way, a user can monitor progress toward or departure from a targeted or goal weight.  The app is designed specifically for use on a mobile device:  for instance, after hopping on the scale, the user immediately enters the weight seen on the scale in the app.

<br></br>
![demo](https://media.giphy.com/media/RGXQXa62TAkiqiBFci/giphy.gif)

### Key Features
  * Secure frontend to backend user authentication using BCrypt and JSON Web Token.
  * Users can create a private account with username, email and password.
  * Users can record a weight; application stores all recorded weights.
  * Users can see, in table format, current weight, previous weight, and average of last five recorded weights.
  * Users can see, in line graph format, their recorded weights as well as a five point moving average of recording weights.
  
### Select Screenshots
Splash page
Login / register page
Weight enter page
Weight view page
<img src="https://sk-github-screenshots.s3-us-west-1.amazonaws.com/Screen+Shot+2019-11-15+at+11.28.58+AM.png" /><br></br>

### Select Code Snippets
The following is the quick snippet showing the code to 'show' a note.  This code stores the note id in a slice of state and opens a modal.
```
showNote(e) {
    this.props.receiveCurrentNoteId(this.props.note.id);
    this.props.openModal('editNoteForm');
  }
```

### Key Technologies
  * MongoDB
  * Mongoose
  * Express
  * React
  * Redux
  
### Database Schema

### `users`

| column name       |  data type  |  details                  |
|-------------------|-------------|---------------------------|
| `id`              | integer     | not null, primary key     |
| `handle`          | string      | not null                  |
| `email`           | string      | not null, unique          |
| `password`        | string      | not null                  |
| `created_at`      | datetime    | not null                  |
| `updated_at`      | datetime    | not null                  |



### Future Implementations


