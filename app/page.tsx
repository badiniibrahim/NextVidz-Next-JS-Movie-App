import MovieCard from "@/components/shared/MovieCard";
import { fetchMovie } from "./action";
import LoadMore from "@/components/shared/LoadMore";
import Hero from "@/components/shared/Hero";
import Footer from "@/components/shared/Footer";

export default async function Home() {
  const { results } = await fetchMovie(1);
  return (
    <main className="py-10 flex flex-col gap-10">
      <Hero />
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {results.map((item: Movie, index: number) => (
          <MovieCard movie={item} key={index} index={index} />
        ))}
      </section>
      <LoadMore />
      <Footer />
    </main>
  );
}
