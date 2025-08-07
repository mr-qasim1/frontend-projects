import { Column } from "./Column";
const columns = {
  column1: [
    {
      heading: "Build UI for onboarding flow",
      paragraph: "0of3subtasks",
    },
    {
      heading: "Build UI for onboarding flow",
      paragraph: "0of3subtasks",
    },
    {
      heading: "Build UI for onboarding flow",
      paragraph: "0of3subtasks",
    },
    {
      heading: "Build UI for onboarding flow",
      paragraph: "0of3subtasks",
    },
  ],
  column2: [
    {
      heading: "Build UI for onboarding flow",
      paragraph: "0of3subtasks",
    },
    {
      heading: "Build UI for onboarding flow",
      paragraph: "0of3subtasks",
    },
    {
      heading: "Build UI for onboarding flow",
      paragraph: "0of3subtasks",
    },
    {
      heading: "Build UI for onboarding flow",
      paragraph: "0of3subtasks",
    },
    {
      heading: "Build UI for onboarding flow",
      paragraph: "0of3subtasks",
    },
    {
      heading: "Build UI for onboarding flow",
      paragraph: "0of3subtasks",
    },
  ],
  column3: [
    {
      heading: "Build UI for onboarding flow",
      paragraph: "0of3subtasks",
    },
    {
      heading: "Build UI for onboarding flow",
      paragraph: "0of3subtasks",
    },
    {
      heading: "Build UI for onboarding flow",
      paragraph: "0of3subtasks",
    },
    {
      heading: "Build UI for onboarding flow",
      paragraph: "0of3subtasks",
    },
  ],
};

export function Data() {
  return (
    <>
      <Column boxList={columns.column1} color="#4BC7E7" text="TODO" />

      <Column boxList={columns.column2} color="#836EF8" text="DOING" />

      <Column boxList={columns.column3} color="#65E7B3" text="DONE" />
    </>
  );
}
