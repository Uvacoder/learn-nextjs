import NarBar from "../src/components/NavBar";

export default function Page() {
  return (
    <>
      <h1>About us</h1>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
