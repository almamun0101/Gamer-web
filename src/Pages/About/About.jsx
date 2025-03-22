import React from "react";

const About = () => {
  return (
    <div className="container min-h-screen bg-white text-black pt-20">
      <h1 className="text-4xl font-bold text-center mb-6">About Gamer Zone</h1>
      <div className="flex flex-col md:flex-row items-center w-full">
        <div className="w-full text-left p-4">
          <p className="text-lg mb-6">
            Welcome to <span className="text-blue-500">Gamer Zone</span>, the
            ultimate hub for gaming enthusiasts! Whether you love action,
            strategy, or adventure games, we have something for everyone.
          </p>

          <h2 className="text-2xl font-semibold mt-6">How to Download Games</h2>
          <p className="text-lg mb-4">
            Downloading games from Gamer Zone is easy! Just follow these simple
            steps:
          </p>
          <ul className="list-disc list-inside">
            <li>Browse our collection and select your favorite game.</li>
            <li>Click on the download button.</li>
            <li>Follow the on-screen instructions to install and enjoy!</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">Gaming Experience</h2>
          <p className="text-lg mb-4">
            At Gamer Zone, we prioritize an immersive gaming experience. Our
            platform ensures smooth gameplay, high-quality graphics, and
            seamless multiplayer interaction. Whether you're a casual player or
            a competitive gamer, you'll find the perfect environment to enjoy
            your favorite games.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Game Reviews</h2>
          <p className="text-lg mb-4">
            Our team of gaming experts provides detailed reviews on the latest
            releases, covering gameplay mechanics, storyline depth, and overall
            performance. Stay informed and make the best choices before
            downloading your next game!
          </p>

          <h2 className="text-2xl font-semibold mt-6">Other Features</h2>
          <p className="text-lg">
            - Stay updated with the latest gaming news and updates.
            <br />
            - Join our community and participate in discussions.
            <br />- Get access to exclusive game reviews and guides.
          </p>
        </div>
      </div>
      <div className="w-full p-4 flex justify-center">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/QdBZY2fkU-0?autoplay=1&si=xjOtD6XzpihlWPzQ"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>
    </div>
  );
};

export default About;
