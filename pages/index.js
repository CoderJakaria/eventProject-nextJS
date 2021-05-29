import axios from "axios";
import Head from "next/head";
import Link from "next/link";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Pokemon API</title>
      </Head>

      {data?.results?.map(resuld => (
        <div className="lists">
          <Link href={`/pokemon/${resuld.name}`}>
            <h2 className="list">{resuld.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon-form");
  const data = await res.json();

  return {
    props: { data },
  };
};
