
import { Box } from "./box";
export function Column({
  boxList = [],
  text,
  color
}) {
  return (
    <div id="column1">
      <div className="insidecolumn">
        <div className="circle1" style={{ backgroundColor: color }}></div>
        <div className="text">{text} ({boxList.length})</div>
      </div>
      <div className="boxes">
        {boxList.map((value,index) => (
          <Box key={index}
            heading={value.heading}
            paragraph={value.paragraph}
          />
        ))}
      </div>
    </div>
  );
}
