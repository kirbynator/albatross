import React from "react";

const StyleContext = React.createContext();
export const StyleConsumer = StyleContext.Consumer;

export class AuthProvider extends React.Component {
  state = {backgroundColor: "#000", width: '100%', heigth: '100%', color: "#fff"};
  render() {
    return (
      <StyleContext.Provider value={{
        ...this.state
      }}>
        { this.props.children }
      </StyleContext.Provider>
    )
  }
};