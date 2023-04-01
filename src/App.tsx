import { Route, Routes } from "react-router-dom";
import React from "react";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import JoinUs from "./pages/JoinUs/JoinUs";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import Layout from "./components/Layout";
import { IStatePage } from "./type";

class App extends React.Component<Record<string, never>, IStatePage> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      title: "test",
    };
    this.setTitle = this.setTitle.bind(this);
  }

  private setTitle(title: IStatePage) {
    this.setState(title);
  }

  render(): React.ReactNode {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<Home title="Home" callback={this.setTitle} />}
            />
            <Route
              path="about"
              element={<About title="About" callback={this.setTitle} />}
            />
            <Route
              path="join"
              element={<JoinUs title="Join Us" callback={this.setTitle} />}
            />
            <Route
              path="*"
              element={<NotFoundPage title="404" callback={this.setTitle} />}
            />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
