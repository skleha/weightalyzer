See the app live [here.](http://weightalyzer.herokuapp.com/)

# Weightalyzer v 1.0

[Live website should be accessed on your mobile device](http://weightalyzer.herokuapp.com/#/)
<br></br>

### Description
Weightalyzer is a cloud-based, easy-to-use, lightweight weight recording app that allows a user to record their body weight.  After logging in, the user can record a weight.  After recording a weight, the user can then see statics on their weight in both in a table and in a graph.  In this way, a user can monitor progress toward or departure from a targeted or goal weight.  At the moment, the app is designed specifically for use on a mobile device--e.g, after hopping on the scale, the user immediately enters the weight seen on the scale in the app.

<br></br>
![demo](https://media.giphy.com/media/RGXQXa62TAkiqiBFci/giphy.gif)

### Key Features
  * Secure frontend to backend user authentication using BCrypt and JSON Web Token.
  * Users can create a private account.
  * Users can record a weight; account keeps track of all recorded weights.
  * Users can see, on weight entry page, current weight, previous weight, and average of last five recorded weights.
  * Users can see, on weight view page, a graph of their recorded weights as well as a five point moving average of weights.
  
### Select Screenshots
The note tile contains a title, body, any labels assigned to the note, and two action icons.  The two action icons include a tag, which will allow for label assignment and/or creation, and a trashcan, which will delete the note.<br></br>
<img src="https://sk-github-screenshots.s3-us-west-1.amazonaws.com/Screen+Shot+2019-11-15+at+10.31.09+AM.png" /><br></br>
The "virtual wall" of notes.<br></br>
<img src="https://sk-github-screenshots.s3-us-west-1.amazonaws.com/Screen+Shot+2019-11-15+at+11.25.36+AM.png" /><br></br>
Searching for notes that contain the "camping" text string (case-insensitive search):<br></br>
<img src="https://sk-github-screenshots.s3-us-west-1.amazonaws.com/Screen+Shot+2019-11-15+at+11.28.58+AM.png" /><br></br>

### Select Code Snippets
The following is the quick snippet showing the code to 'show' a note.  This code stores the note id in a slice of state and opens a modal.
```
showNote(e) {
    this.props.receiveCurrentNoteId(this.props.note.id);
    this.props.openModal('editNoteForm');
  }
```
The modal, and its contents, are displayed in a keyframes animation:
```
@keyframes modalAppear { 
    0% { opacity: 0; }
    100% { opacity: 1; }
}
```
The user clicks on a button with text of "close" to close and save the note.
```
    <button
        className="note-update-button"
         onClick={this.handleSubmit}>
         Close
    </button>
```

### Key Technologies
  * PostGreSQL
  * Ruby on Rails
  * React-Redux

### Future Implementations
The development roadmap for keeper includes some form of media attachment to a note.  Users will be able to attach a photo, describe it, and view it, along with text, on the virtual wall of notes.  Additionally, I plan to add collaboration, where a user can give another user read/write access to a note.  In this way, a note can be shared between two users and modified by either user.


