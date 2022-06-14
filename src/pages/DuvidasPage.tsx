import { withAppBar } from "../components/HOCs/withAppBar";

const DuvidasPageComponent = () => {
  return (
    <>
      <h1>DuvidasPage</h1>
    </>
  );
};

const DuvidasPage = withAppBar(DuvidasPageComponent, "Dúvidas");

export default DuvidasPage;
