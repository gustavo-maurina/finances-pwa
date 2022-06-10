import { withAppBar } from "../components/HOCs/withAppBar";

const DuvidasPageComponent = () => {
  return (
    <>
      <h1>DuvidasPage</h1>
    </>
  );
};

export const DuvidasPage = withAppBar(DuvidasPageComponent, "Dúvidas");
