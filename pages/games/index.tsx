import type { NextPage } from "next";
import Layout from "../../layouts/layout";
import GamesLayout from "../../components/games-layout";
import { games } from "../../data/games";

const Games: NextPage = () => {
  return (
    <Layout title="Games">
      <div className="container mx-auto px-container">
        <GamesLayout games={games} />
      </div>
    </Layout>
  );
};

export default Games;
