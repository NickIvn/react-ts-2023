import React from "react";
import { IRouter } from "../../type";
import { Link } from "react-router-dom";

class NotFoundPage extends React.Component<IRouter> {
  constructor(props: IRouter) {
    super(props);
    this.props.callback(this.props);
  }

  render(): React.ReactNode {
    return (
      <div>
        <h2>404</h2>
        <h3>Page not found</h3>
        <Link to="/">HOME PAGE</Link>
      </div>
    );
  }
}

export { NotFoundPage };
