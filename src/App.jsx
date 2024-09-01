import WorkSample from "./workSample";

export default function App() {
  return (
    <div>
      <WorkSample
        year={"2016-2017"}
        experience={"B.Sc Engr. CSE"}
        institute={"IUBAT University"}
      />

      <WorkSample
        year={"2015-2017"}
        experience={"B.Sc Engr. CE"}
        institute={"IUT University"}
      />

      <WorkSample
        year={"2016-2018"}
        experience={"B.Sc Engr. ME"}
        institute={"NSU University"}
      />
    </div>
  );
}
