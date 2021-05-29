import Head from "next/head";
import React from "react";

const poke = ({ data }) => {
  return (
    <div className="poke">
      <Head>
        <title>{data.name}</title>
      </Head>
      <h1>PokeMon Page</h1>
      <div className="poke__pu">
        <h3>{data.name}</h3>
        <img src={data.sprites.front_default} alt="" />
      </div>
    </div>
  );
};

// export const getServerSideProps = async context => {
//   const res = await fetch(
//     `https://pokeapi.co/api/v2/pokemon-form/${context.params.id}`
//   );
//   const data = await res?.json();

//   return {
//     props: { data },
//   };
// };

export const getStaticPaths = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-form`);
  const data = await res.json();

  const paths = data.results.map(poke => ({
    params: { id: poke.name.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async context => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon-form/${context.params.id}`
  );
  const data = await res.json();

  return {
    props: { data },
  };
};

export default poke;
