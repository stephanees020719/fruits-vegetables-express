const React = require('react');

//define my ShowV component
class ShowV extends React.Component {
  render () {
    //destructure the props object to get the vegetable object
    const { name, color ,readyToEat} = this.props.vegetable

    return (
      <div>
        <h1> Vegetables Page </h1>
        The {name} is {color}.
        And {
          readyToEat ? 
            "It is ready to eat, it's good to have your greens!"
          :
            "It is not ready to eat... "
        }
      </div>
    );
  }
}


//dont forget to export your component
module.exports = ShowV