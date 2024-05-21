"use client";
interface ErrorStateProps {
  error: Error;
  reset: () => void;
}

const Error: React.FC<ErrorStateProps> = ({ error, reset }) => {
  return <div>"Uh No!! There was a problem."</div>;
};

export default Error;
