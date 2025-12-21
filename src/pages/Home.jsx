import Header from "../components/Header";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const items = [
    {
      title: "Latest Movies",
      image: "https://picsum.photos/400/300?1",
      link: "https://t.me/your_movie_channel",
    },
    {
      title: "Web Series",
      image: "https://picsum.photos/400/300?2",
      link: "https://t.me/your_series_channel",
    },
    {
      title: "Programming Courses",
      image: "https://picsum.photos/400/300?3",
      link: "https://t.me/your_course_channel",
    },
    {
      title: "Premium Content",
      image: "https://picsum.photos/400/300?4",
      link: "https://t.me/your_premium_channel",
    },
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />

      <main className="flex-1 px-4 sm:px-8 py-8">
        <h2 className="text-2xl text-white font-bold mb-6 text-center">
          Explore Content
        </h2>

        <div className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
        ">
          {items.map((item, i) => (
            <MovieCard key={i} {...item} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
