import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import page_not_found from "./components/pagenotfound/page_not_found";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import InterviewPage from "./components/interviewpage/InterviewPage";
import ProfilePage from "./components/profile/profilepage";
import AddQuestion from "./components/question/addQuestion";
import HomePage from "./components/home/_home";
import Home from "./components/home/Home";
import { PrivateRoute } from "./components/auth/authContext";
import { AuthProvider } from "./components/auth/authContext";
import SearchPeerPage from "./components/searchPeer/serachPeer";
import BoopButton from "./components/notifications/sound"
import SetupPage from "./components/interviewpage/setupPage";
import SetQuestionsPage from "./components/setupInterview/selectProblemPage"
import FindCandiate from "./components/home/find-candidate";
import FindHost from "./components/home/find-host";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} ></Route>
            <PrivateRoute path='/setup/:id'>
              <SetupPage />
            </PrivateRoute>
            <PrivateRoute path='/interview/:id'>
              <InterviewPage />
            </PrivateRoute>
            <Route path="/find-host" component={FindHost} ></Route>
            <Route path="/find-candidate" component={FindCandiate} ></Route>
            <Route path="/profile" component={ProfilePage} ></Route>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/search" component={SearchPeerPage}></Route>
            <Route path="/addproblem" component={AddQuestion} ></Route>
            <Route path="/boop" component={BoopButton} ></Route>
            <Route path={'/setupInterview'} component={SetQuestionsPage}></Route>
            <Route path="*" component={page_not_found}></Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
export default App;
