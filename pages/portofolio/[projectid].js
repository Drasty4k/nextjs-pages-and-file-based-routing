import { useRouter } from "next/router";

function PortofolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  // send a request to some backend server
  // to fetch the piece of data with an id of router.query.[slug]

  return (
    <div>
      <h1>The Portofolio Project Page</h1>
    </div>
  );
}

export default PortofolioProjectPage;
