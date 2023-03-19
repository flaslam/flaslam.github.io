import type { NextPage } from "next";
import Layout from "../../layouts/layout";
import GamesLayout from "../../components/games-layout";
import { games } from "../../data/games";

const Games: NextPage = () => {
  return (
    <Layout title="Games">
      <div className="mx-auto max-w-screen-lg">
        <div className="container mx-auto px-8">
          <GamesLayout games={games} />
        </div>
      </div>
    </Layout>
  );
};

export default Games;
