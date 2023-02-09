import Link from "next/link";
import MainLayout from "../components/layouts/main";

export default function FourOhFour() {
  return (
    <MainLayout title="404">
      <div className="container mx-auto text-center">
        <h1>404 | Page Not Found</h1>
        <Link href="/" className="font-bold hover:text-blue-700">
          Go back home
        </Link>
      </div>
    </MainLayout>
  );
}
