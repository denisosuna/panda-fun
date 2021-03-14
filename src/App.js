import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Spinner from "components/spinner";
import Layout from "components/layout";
import { GifsContextProvider } from "context/gifs";
import SearchResults from "pages/SearchResults";
import Detail from "pages/Detail";
import Error404 from "pages/404";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
const Home = React.lazy(() => import("pages/home"));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: grey[800],
    },
  },
});

export default function App() {
  return (
    <Router>
      <React.Suspense fallback={<Spinner />}>
        <ThemeProvider theme={theme}>
          <Layout>
            <GifsContextProvider>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/search/:keyword/:rating?" component={SearchResults} />
                <Route path="/gif/:id" component={Detail} />
                <Route exact path="/404" component={Error404} />
              </Switch>
            </GifsContextProvider>
          </Layout>
        </ThemeProvider>
      </React.Suspense>
    </Router>
  );
}
