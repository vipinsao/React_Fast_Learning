import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
// import React from "react";
import { Component } from "react";

// const AboutPage = () => {
//   return (
//     <div>
//       <h1>About - </h1>
//       <Profile />
//       <ProfileClass name={"Alex Class"} />
//     </div>
//   );
// };

// export default AboutPage;

//kyoki ProfileClass is class based
//so for complicating things and learning purpose
//we are going to make About as class method

class About extends Component {
  constructor() {
    super();
  }

  // componentDidMount() {
  //   console.log("parent component did mount is called");
  // }

  render() {
    return <ProfileClass name={"Alex Class"} />;
  }
}

export default About;
