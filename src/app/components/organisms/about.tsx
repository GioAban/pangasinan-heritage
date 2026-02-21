import { Article } from "@/types";
import { Badge } from "../atoms/badge";
import NewsCarousel from "../organisms/news-carousel";
interface HomeAboutProps {
  articles: Article[];
}
const HomeAbout = ({ articles }: HomeAboutProps) => {
  return (
    <section id="about" className="bg-white py-12 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-left">
          <Badge>News Updates</Badge>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-blue-500 lg:text-7xl">
            Whats happening now
          </h2>
        </div>
        <NewsCarousel articles={articles} />
      </div>
    </section>
  );
};

export default HomeAbout;
