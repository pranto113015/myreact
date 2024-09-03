import WorkSample from "./workSample";

export default function App() {
  const workData = [
    {
      year: "2016-2017",
      experience: "B.Sc Engr. CSE",
      institute: "IUBAT University",
    },
    {
      year: "2016-2017",
      experience: "B.Sc Engr. CSE",
      institute: "IUBAT University",
    },
    {
      year: "2016-2017",
      experience: "B.Sc Engr. CSE",
      institute: "IUBAT University",
    },
    {
      year: "2016-2017",
      experience: "B.Sc Engr. CSE",
      institute: "IUBAT University",
    },
  ];

  return (
    <div>
      {workData.map((work) => (
        <WorkSample work={work} />
      ))}
    </div>
  );
}
