import "./App.css";
import { useEffect } from "react";
import { petIncrement, petDecrement, getUsers, getApplications, getPosts } from "./actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  // @ts-ignore
  const users = useSelector((state) => state.users.users);
  // @ts-ignore
  const loading = useSelector((state) => state.users.loading);
  // @ts-ignore
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getApplications())
    dispatch(getPosts())
  }, []);

  console.log(users)
  // @ts-ignore
  const applications = useSelector(state => state.applications.applications)
  console.log(applications)
  // @ts-ignore
  const posts = useSelector(state => state.posts.posts)
  console.log(posts)

  return (
      <div className="App">
        <h1>Welcome to React Redux Saga Crash Course</h1>
        {loading && <h2>Loading...</h2>}
        {error && !loading && <h2>{error}</h2>}
        {users && users.map((user: any, i: number) => <h1 key={i}>{user.name}</h1>)}
        {applications && applications.map((application: any, i: number) => <h1 key={i}>{application.firstName}</h1>)}
      </div>
  );
}

export default App;