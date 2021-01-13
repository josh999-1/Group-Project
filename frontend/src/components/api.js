import axios from "axios";

class App extends Component {


state = {
contacts: []
};

componentDidMount() {
axios
.get("https://opentdb.com/api.php?amount=10&encode=url3986")
.then(response => {

// create an array of contacts only with relevant data
const newContacts = response.data.map(c => {
return {
id: c.id,
name: c.name
};
});

// create a new "State" object without mutating 
// the original State object. 
const newState = Object.assign({}, this.state, {
contacts: newContacts
});

// store the new state object in the component's state
this.setState(newState);
})
.catch(error => console.log(error));
}

render() {
return (
<div className="App">

...

<ContactList contacts={this.state.contacts} />
</div>
);
}
}

export default App;