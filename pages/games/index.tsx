import type { NextPage } from "next";
import MainLayout from "../../components/layouts/main";
import GamesLayout from "../../components/games-layout";
import { games } from "../../types/games";

const Games: NextPage = () => {
  return (
    <MainLayout title="Games">
      <div className="mx-auto max-w-screen-lg">
        <div className="container mx-auto px-6 pb-4 sm:px-12">
          <GamesLayout games={games} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Games;
