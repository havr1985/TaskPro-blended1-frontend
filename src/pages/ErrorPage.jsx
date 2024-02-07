import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main>
      <h1>Sorry! This page not found :(</h1>
      <h2>
        <Link to={"/home"} style={{ color: "red" }}>
          Click here
        </Link>{" "}
        for redirect to home page
      </h2>
    </main>
  );
}
