import { CircularProgress } from "@mui/material";

const loading = () => {
  return <div className="min-w-screen min-h-screen flex items-center justify-center">
      <CircularProgress />
  </div>;
};

export default loading;
