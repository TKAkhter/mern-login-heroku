import Header from "../components/Header";
import Posts from "../components/Posts";

// import { GlobalContext } from '../context/Context';
// import { useContext } from "react";

function Home() {

  // let { state, dispatch } = useContext(GlobalContext);

  return (
    <>
      <Header />
      <Posts />
    </>
  );
}

export default Home;
