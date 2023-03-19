import Link from "next/link";
import Layout from "../layouts/layout";

export default function FourOhFour() {
  return (
    <Layout title="404">
      <div className="container mx-auto text-center">
        <h1>404 | Page Not Found</h1>
        <Link href="/" className="font-bold hover:text-link">
          Go back home
        </Link>
      </div>
    </Layout>
  );
}
