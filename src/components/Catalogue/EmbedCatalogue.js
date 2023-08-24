import Title from "../Title/Title";
import './EmbedCatalogue.scss';

const EmbedCatalogue = () => {
  return (
    <div className="embed-catalogue">
      <div className="container">
        <Title
          className={"text-center"}
          headingLevel="h3"
        ><span className="title-underline zero">Our Catalogue</span></Title>

        <div className="mt-5">
        <iframe src="https://heyzine.com/flip-book/55044ddf8b.html" frameborder="0" allowfullscreen="" allowtransparency=""></iframe>
        </div>
      </div>
    </div>
  );
};

export default EmbedCatalogue;
