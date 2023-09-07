const React = require("react")

//define a class componet
class IndexV extends React.Component {
  render() {
    // destructure the vegetables prop from this.props
    const { vegetables } = this.props
    return(
      <div>
        <h1> Vegetables Index Page </h1>
        <nav>
          <a href="/vegetables/newv">Create a New vegetable</a>
        </nav>
        <ul>
          {
            //map over the vegetables array and render a list item for each veggie
            vegetables.map((vegetable, v) => {
              return (
                <li>
                  The{' '}
                    <a href={`/vegetables/${vegetable._id}`}>
                      {vegetable.name}
                    </a>
                    {' '}
                    is {vegetable.color} <br></br>
                    {//check if my vegetable is ready to eat
                      vegetable.readyToEat ? 
                        `It is ready to eat`
                      : 
                        `It is not ready to eat`
                    }
                                      <br />
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

module.exports = IndexV