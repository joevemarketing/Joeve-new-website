import Image from "next/image";

const videos = [
  "hX537OXLRRg",
  "E8B8WtTTTHc",
  "prRpyUWOJAU",
  "5O0smZtmkhw",
  "8oFgGn5Js8s",
  "zJenV4tIKWo",
  "2X1ylWjE1Hw",
  "NyJINdKexQ0",
  "OAiq-1n9l-s",
  // Added new links
  "pBO_0BtJ9Qk",
  "JFQtdjNRbeE",
];

export default function VideoLinksPage() {
  return (
    <main className="min-h-screen pt-20 bg-background">
      <section className="bg-joeve-blue-deep py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=YouTube%20video%20gallery%20futuristic%20UI%20blue%20neon&image_size=landscape_16_9"
            alt="Video Links Hero"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-joeve-blue-deep/50 to-joeve-blue-deep" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-wider">
            Video Links
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Curated YouTube videos showcasing our capabilities and inspirations.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((id) => (
            <div key={id} className="bg-joeve-blue-dark border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${id}?rel=0`}
                  title={`YouTube video ${id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
