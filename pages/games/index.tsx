import type { NextPage } from "next";
import MainLayout from "../../layouts/main";
import GamesLayout from "../../components/games-layout";
import { games } from "../../data/games";

const Games: NextPage = () => {
  return (
    <MainLayout title="Games">
      <div className="mx-auto max-w-screen-lg">
        <div className="container mx-auto px-6">
          <GamesLayout games={games} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Games;
