import { useTranslation } from "next-i18next";
import * as React from "react";

import { useDayjs } from "../../utils/dayjs";
import { ParticipantRowView } from "../poll/desktop-poll/participant-row";
import { ScoreSummary } from "../poll/score-summary";

const sidebarWidth = 180;
const columnWidth = 100;
// mock data of poll participants
const participants = [
  {
    name: "Reed", // participant name
    color: "bg-sky-400", // name icon color
    votes: [0, 2], // idx of times they are available
  },
  {
    name: "Susan",
    color: "bg-blue-400",
    votes: [0, 1, 2],
  },
  {
    name: "Johnny",
    color: "bg-primary-400",
    votes: [2, 3],
  },
  {
    name: "Ben",
    color: "bg-purple-400",
    votes: [0, 1, 2, 3],
  },
];

// data options to choose from 
const options = ["2022-12-14", "2022-12-15", "2022-12-16", "2022-12-17"];

const PollDemo: React.VoidFunctionComponent = () => {
  const { t } = useTranslation("homepage");

  const { dayjs } = useDayjs();
  // build the Dom elements. 
  return (
    <div
      className="rounded-lg bg-white py-1 shadow-huge"
      style={{ width: 600 }}
    >
      <div className="flex">
        <div
          className="flex shrink-0 items-center py-2 pl-4 pr-2 font-medium"
          style={{ width: sidebarWidth }}
        >
          <div className="flex h-full grow items-end">
            {t("participantCount", { count: participants.length /* display how many people participated in total in the poll*/})}
          </div>
        </div>
        {options.map((option, i) => { // draw the dates that are chooseable in the top row. 
          const d = new Date(option);
          let score = 0;
          participants.forEach((participant) => { 
            if (participant.votes.includes(i)) {
              score++; // compute how many participant voted for each time. 
            }
          });
          return (
            <div
              key={i}
              className="shrink-0 space-y-3 py-2 pt-3 text-center transition-colors"
              style={{ width: columnWidth }}
            >
              <div>
                <div className="font-semibold leading-9">
                  <div className="text-sm uppercase text-slate-400">
                    {dayjs(d).format("ddd") /* plot the day */}
                  </div>
                  <div className="text-2xl">{dayjs(d).format("DD")}</div>
                  <div className="text-xs font-medium uppercase text-slate-400/75">
                    {dayjs(d).format("MMM") /* plot the month*/ }
                  </div>
                </div>
              </div>
              <div>
                {/* plot how many people voted for each time */}
                <ScoreSummary yesScore={score} /> 
              </div>
            </div>
          );
        })}
      </div>
      {participants.map((participant, i) => (  // add one row for each participant to the poll overview
        <ParticipantRowView
          key={i}
          color={participant.color}  // each participant icon gets their own color
          sidebarWidth={sidebarWidth}
          columnWidth={columnWidth}
          participantId={`participant${i}`}
          name={participant.name}
          votes={options.map((_, i) => {
            return participant.votes.some((vote) => vote === i) ? "yes" : "no"; // see which participants has voted for which time. 
          })}
        />
      ))}
    </div>
  );
};

export default PollDemo;
