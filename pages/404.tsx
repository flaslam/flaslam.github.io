import Link from "next/link";
import Layout from "../components/layouts/layout";

export default function FourOhFour() {
  return (
    <Layout title="404">
      <div className="container mx-auto text-center">
        <h1>404 | Page Not Found</h1>
        <Link href="/">
          <a className="font-bold hover:text-blue-700">Go back home</a>
        </Link>
      </div>
    </Layout>
  );
}
