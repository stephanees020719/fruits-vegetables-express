const React = require("react")
//define a class component
class NewV extends React.Component {
  //what my render method would return 
  render() {
    return (
      <div>
        <h1>vegetables Page</h1>
        

        <form action="/vegetables" method="POST">
          Name: <input type="text"  name="name" /> <br />
          Color: <input type="text" name="color" /> <br />
          Is Ready To Eat: <input type="checkbox" name="readyToEat" /> <br />
          Image URL: <input type="text" name="img" />
          <input type="submit" value="Create vegetables" />
        </form>
        <nav>
          <a href="/vegetables">Back</a>
        </nav>
      </div>
    )
  }
}

module.exports = NewV


