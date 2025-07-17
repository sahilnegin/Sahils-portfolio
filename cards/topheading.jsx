export default function Topheading({ title }) {
  return (
    <div className="bg-[#121212] text-white max-w-full sm:max-w-xl mx-auto p-4 sm:p-6 text-center">
      <h1 className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl">
        {title}
      </h1>
    </div>
  );
}
