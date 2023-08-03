import Title from "../../../Title/Title";
import "./IconWithBackground.scss";
import { IconWithBackgroundData } from "./iconWithBackgroundData";
import parse from "html-react-parser";

const IconWithBackground = ({ title }) => {
  return (
    <div className={`background-wrapper`}>
      <div className="container text-center">
        {title.text && (
          <Title className={title.cssClass}>{parse(title.text)}</Title>
        )}
        <div className="icon-wrapper">
          <div className="row">
            {IconWithBackgroundData?.map((item) => (
              <div key={item.id} className={item.className}>
                <div className="icon-text-wrapper">
                  {item.icon && (
                    <div className="img-section">
                      <img
                        className="img-fluid"
                        src={item.icon}
                        alt={item.title}
                      />
                    </div>
                  )}

                  {item.title && <h3 className="img-title">{item.title}</h3>}

                  {item.description && (
                    <div className="img-description">{item.description}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconWithBackground;
