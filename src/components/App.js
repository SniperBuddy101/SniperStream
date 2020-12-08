import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import HeaderMenu from "./HeaderMenu";
import history from "../history";

const App = () => {

    return <Router history={history}>
    <div className="ui container">
    <HeaderMenu />
    <Switch>
    <Route exact path="/" component={StreamList} />
    <Route exact path="/streams/create" component={StreamCreate} />
    <Route exact path="/streams/edit/:id" component={StreamEdit} />
    <Route exact path="/streams/delete/:id" component={StreamDelete} />
    <Route exact path="/streams/:id" component={StreamShow} />
    </Switch>
    </div>
    </Router>
}

export default App;