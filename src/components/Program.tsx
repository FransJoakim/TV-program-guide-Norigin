import { useContext } from "react";
import { formatTime } from "../lib/services";
import { ShowInterface, ProgramContext } from "../lib/state";

const Show = ({
  show: { title, start, end },
  rootWidth,
}: {
  show: ShowInterface;
  rootWidth: number;
}) => {
  const timeFormated = formatTime(start, end);
  return (
    <div
      className="h-24 flex flex-col border-r border-b border-gray-400 p-2"
      style={{
        width:
          (24 * rootWidth) / (2400 / timeFormated.timeIntervalWidth) + "rem",
      }}
    >
      <p>{title}</p>
      <p
        style={{
          fontSize: timeFormated.timeIntervalWidth < 40 ? "0.8rem" : "0.9rem",
        }}
      >
        {timeFormated.time.start} - {timeFormated.time.end}
      </p>
    </div>
  );
};

export const Program = ({ rootWidth }: { rootWidth: number }) => {
  const program = useContext(ProgramContext);

  return (
    <>
      {program.map((channel) => (
        <div key={channel.id}>
          <div className="flex">
            {channel.schedules.map((show, index) => (
              <Show show={show} rootWidth={rootWidth} key={index} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};