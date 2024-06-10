import { getWorkData } from "@/lib/works";
import WorkPage from "@/screens/work";

export default async function Work({ params }) {
  const work = await getWorkData(params.id);

  return <WorkPage work={work} />;
}
