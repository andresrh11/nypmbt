import { Logo } from "../components/Logo";
import { Nav } from "../components/nav";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <Logo />
        <Nav />
      </div>
      <div id="detail"></div>
    </>
  );
}
