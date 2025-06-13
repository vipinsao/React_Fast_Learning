import React from "react";
import UserContext from "../utils/UserContext";

//Now profileclass inherited the React.components
class ProfileClass extends React.Component {
  //for receiving props
  constructor() {
    //super is used to call
    //the constructor of the parent function
    // super(props);
    super();

    //creating state in this state is reserved keyword
    //onbly one time we can declare state
    //now if any new state variable want to create
    //declare inside this.state
    // this.state = {
    //   count: 0,
    // };

    this.state = {
      userDetails: null,
    };
  }

  //its not like useEffect in class component
  //it runs the code in sidebar like api calling
  //It will be called only one time if there is no changes
  async componentDidMount() {
    try {
      const data = await fetch("https://api.github.com/users/vipinsao");
      const response = await data.json();
      console.log(response);
      this.setState({
        userDetails: response,
      });
    } catch (error) {
      console.error("Got an error while fetching the data");
    }

    //for understanding the most important question
    //in interview purpose thats clean up
    //for understanding this creating one
    //setInterval method
    // this.timer = setInterval(() => {
    //   console.log("Understaning the clean up");
    // }, 1000);
  }

  //when  some update happens then this will be called
  //5
  componentDidUpdate(prevProps, prevState) {
    //example to check the changes
    // if (this.state.count !== prevState.count) {
    // }

    console.log("component did update method");
  }

  //at last this will run when we go to other page or exist that page
  //6
  componentWillUnmount() {
    console.log("component will unmount");
    console.log("This is very important for web page optimization");
    // clearInterval(this.timer);
  }

  //created seprate method for decrement
  // decrement = () => {
  //   this.setState((prevState) => ({
  //     count: prevState.count - 1,
  //   }));
  // };
  //it will return some JSX
  render() {
    return this.state.userDetails === null ? (
      <h3>Loading...</h3>
    ) : (
      // <div
      //   style={{
      //     border: "1px solid black",
      //     borderRadius: "8px",
      //     marginTop: "10px",
      //     padding: "10px",
      //   }}
      // >
      //   <h2>Name - {this.props.name}</h2>
      //   <h2>Implemented - Using Class Based</h2>
      //   <h2>Why - To learn class based also</h2>
      //   <button
      //     onClick={() => {
      //       this.setState({
      //         count: this.state.count + 1,
      //       });
      //     }}
      //   >
      //     Increment
      //   </button>
      //   <h2>Counter - {this.state.count}</h2>
      //   <button onClick={this.decrement}>Decrement</button>
      // </div>

      <div
        style={{
          border: "1px solid black",
          borderRadius: "8px",
          marginTop: "10px",
          padding: "10px",
        }}
      >
        <h1>Github profile using the did mount method.....</h1>
        <h3>Name: {this.state.userDetails?.name}</h3>
        <h3>Public Repo: {this.state.userDetails?.public_repos}</h3>
        <h3>Follwers: {this.state.userDetails?.followers}</h3>

        {/* Learning Context api in class component */}
        <UserContext.Consumer>
          {(data) => (
            <>
              <h1 className="font-bold mt-4">
                Using the Context API in class component
              </h1>
              <h2>Name:{data.name}</h2>
              <h2>Email:{data.email}</h2>
            </>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default ProfileClass;

// ✅ Summary Table (Lifecycle of Class Component)
// Phase	Method
// Mounting	constructor() → getDerivedStateFromProps() → render() → componentDidMount()
// Updating	getDerivedStateFromProps() → shouldComponentUpdate() → render() → getSnapshotBeforeUpdate() → componentDidUpdate()
// Unmounting	componentWillUnmount()
// Error Handling	getDerivedStateFromError() → componentDidCatch()

//Lifecycle in functional component, they dont directly use
//life cycle methods rather use useEffect() as equivalents to
//lifecyle method

// 🧠 useEffect() Lifecycle Equivalents:
// Class Method	Functional with useEffect()
// componentDidMount	useEffect(() => { ... }, [])
// componentDidUpdate	useEffect(() => { ... }, [dependencies])
// componentWillUnmount	useEffect(() => { return () => { ... } }, [])

//example ->
// import { useEffect } from "react";
// function MyComponent() {
//   useEffect(() => {
//     // DidMount
//     console.log("Mounted");
//     // WillUnmount
//     return () => {
//       console.log("Cleanup");
//     };
//   }, []);
//   return <div>Hello</div>;
// }

// 🧠 Tip for Interviews
// If asked about React lifecycle in an interview:

// Explain mounting → updating → unmounting clearly.

// Mention useEffect for function components.

// Emphasize render() is pure, componentDidMount() is for side-effects, and componentWillUnmount() is for cleanup.

//For knowing purpose when we called parent class and child class
//life cyle methods so this is what i learned

// Parent ctr is called
// About.js:33 parent render is called
// ProfileClass.js:18 child ctr is called
// ProfileClass.js:35 child render method is called

//->>>>> ye jo mounting chiz hai matlab update in ui
//React will do this in batches means all update one by one
//but show them together so that user will have a nice
//experince that all things came together

// ProfileClass.js:24 child Component did mount is called
// About.js:29 parent component did mount is called
