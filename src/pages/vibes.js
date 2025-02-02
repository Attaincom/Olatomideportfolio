import React from "react";
import { Card } from "../components/ui/card"; 
import { Play } from "lucide-react"; 
import { FaSpotify } from "react-icons/fa";  // Use FaSpotify from react-icons

const Vibes = () => {
  return (
    <div className="bg-black text-white p-6 space-y-6">
      <h2 className="text-lg font-semibold flex items-center gap-2">
        Vibe while hustling <span className="text-gray-400">🎧</span>
      </h2>

      <div className="flex gap-4">
        {/* Spotify Card 1 */}
        <Card className="bg-red-800 p-4 rounded-lg w-64">
          <h3 className="text-lg font-bold">
            Listen to the full track and millions more on Spotify
          </h3>
          <button className="bg-white text-black px-4 py-2 rounded-md mt-2">
            Get Spotify
          </button>
          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="text-sm">Rhythm & Blues</p>
              <p className="text-xs text-gray-300">Ayra Starr</p>
            </div>
            <Play className="w-6 h-6" />
          </div>
        </Card>

        {/* Spotify Card 2 */}
        <Card className="bg-red-800 p-4 rounded-lg w-64">
          <div className="flex justify-between items-center">
            <img
              src="/path-to-dua-lipa.jpg"
              alt="Dua Lipa"
              className="w-16 h-16 rounded"
            />
            <FaSpotify className="w-6 h-6" /> {/* Replaced BrandSpotify with FaSpotify */}
          </div>
          <h3 className="text-lg font-bold mt-2">Be the One</h3>
          <p className="text-sm text-gray-300">Dua Lipa</p>
          <button className="flex items-center gap-2 mt-2 text-sm">
            <span>Save on Spotify</span>
          </button>
          <Play className="w-6 h-6 mt-2" />
        </Card>
      </div>
    </div>
  );
};

export default Vibes;
