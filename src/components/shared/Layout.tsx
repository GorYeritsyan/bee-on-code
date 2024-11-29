import { Outlet } from "react-router";
import Header from "./Header";
import Container from "./Container";
import Categories from "./Categories";

const Layout = () => {
  return (
    <main>
      <Header />
      <section className="py-10">
        <Container>
          <div>
            <Categories />
            <Outlet />
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Layout;
