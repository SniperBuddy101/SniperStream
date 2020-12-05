import React from "react";
import {Router, Route} from "react-router-dom";
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
    <Route exact path="/" component={StreamList} />
    <Route exact path="/streams/create" component={StreamCreate} />
    <Route exact path="/streams/edit/:id" component={StreamEdit} />
    <Route exact path="/streams/delete/:id" component={StreamDelete} />
    <Route exact path="/streams/show/:id" component={StreamShow} />

    </div>
    </Router>
}

export default App;