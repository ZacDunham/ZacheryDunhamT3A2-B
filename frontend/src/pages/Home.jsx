import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Welcome to Cafe Connect!</h1>
      </div>
    </>
  );
};

export default Home;
