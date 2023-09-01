const React = require("react")


class IndexV extends React.Component {
  render() {
    const { vegetables } = this.props
    return(
      <div>
        <h1> Vegetables Index Page </h1>
        <ul>
          {
            vegetables.map((vegetable, v) => {
              return (
                <li>
                  The{' '}
                    <a href={`/vegetables/${v}`}>
                      {vegetable.name}
                    </a>
                    {' '}
                    is {vegetable.color} <br></br>
                    {
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