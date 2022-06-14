import { Suspense } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, ToastContainerProps } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BottomTab } from "./components/BottomTab/BottomTab";
import { CircleLoader } from "./components/shared/CircleLoader";
import AppRoutes from "./routes";

const queryClient = new QueryClient();

const toast: ToastContainerProps = {
  style: {
    marginBottom: 80,
    marginLeft: "1.5rem",
    marginRight: "1.5rem",
    textAlign: "center",
    borderRadius: ".3rem",
  },
};

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<CircleLoader />}>
            <SkeletonTheme baseColor="#d3d3d3" highlightColor="#e3e3e3">
              <AppRoutes />
            </SkeletonTheme>
          </Suspense>

          <BottomTab />
        </BrowserRouter>
      </QueryClientProvider>

      <ToastContainer
        theme="colored"
        position="bottom-center"
        toastStyle={toast.style}
      />
    </>
  );
}

export default App;
