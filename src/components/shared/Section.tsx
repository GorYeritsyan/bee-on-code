import Container from "./Container";
import Categories from "./Categories";
import Items from "./Items";

const Section = () => {
  return (
    <section className="py-10">
      <Container>
        <div>
        <Categories />
        <Items />
        </div>
      </Container>
    </section>
  );
};

export default Section;
