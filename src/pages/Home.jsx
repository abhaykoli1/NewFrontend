import Header from "../components/Header";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const items = [
    {
      title: "Latest Movies",
      image: "../../public/img1.jpeg",
      link: "https://t.me/+BBYKIyRXCIo0ZTZl",
    },
    {
      title: "Web Series",
      image: "../../public/img2.jpeg",
      link: "https://t.me/+BBYKIyRXCIo0ZTZl",
    },
    {
      title: "Blue films",
      image: "../../public/img3.jpeg",
      link: "https://t.me/+BBYKIyRXCIo0ZTZl",
    },
    {
      title: "Sexy hub",
      image: "../../public/img4.jpeg",
      link: "https://t.me/+BBYKIyRXCIo0ZTZl",
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
