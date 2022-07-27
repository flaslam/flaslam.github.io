import { NextPage } from "next";
import Games from "../components/games";
import Layout from "../components/layouts/layout";
import Visual from "../components/visual";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="container mx-auto my-12 flex justify-center">
        {/* <Visual /> */}
      </div>
      <Games />
    </Layout>
  );
};

export default Home;
