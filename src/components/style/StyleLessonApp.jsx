import { CssModules } from "./CssModules";
import { Emotion } from "./Emotion";
import { InlineStyle } from "./InlineStyle";
import { StyledComponents } from "./StyledComponents";
import { StyledJsx } from "./StyledJsx";

export const StyleLessonApp = () => {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
};
