import { Fragment } from "react";
import HomeHero from "./hero";
import Container from "./container";
import { getDbData } from "@/lib/data-fetcher";
import HomeHeritage from "./components/organisms/heritage-showcase";
export default async function Home() {
  const data = await getDbData();
  return (
    <Fragment>
      <HomeHero />
      <Container>
        <HomeHeritage spots={data.spots} />
      </Container>
    </Fragment>
  );
}
