export interface Project {
  name: string;
  tools: string;
  description: string;
  abouts?: string[];
  roles?: string[];
  screenshots?: number;
  videos?: number;
  directory: string;
}

export const projects: Project[] = [
  {
    directory: "distance",
    name: "Distance",
    tools: "Unity, Blender, FMOD",
    description:
      "3D action RPG featuring procedurally generated levels, fast-paced enemy combat encounters and story elements in between levels.",
    abouts: [
      "Programming, design, 3D modeling, animation, music & SFX.",
      "Dungeon levels are procedurally generated at runtime, making them unique in every playthrough.",
      "Combat system, weapon and skill upgrades.",
      "Varied enemy AI types and boss encounters.",
      "Adaptive soundtrack based on environment.",
    ],
    // roles: ["Independent project: programming, design, 3D art, music & SFX."],
    // systems: ["Procedurally generated levels", "Combat and enemy AI"],
    screenshots: 3,
    videos: 1,
  },
  {
    directory: "respite",
    name: "Respite",
    tools: "Unity, Blender, FMOD",
    description:
      "3D point-and-click narrative game featuring hand-crafted environments and stories about left behind spaces.",
    abouts: [
      "Programming, design, 3D modeling, animation, music & SFX.",
      "Branching narrative story.",
      "Interactive environments and objects.",
      "Replayable story with different outcomes.",
    ],
    videos: 2,
  },
  {
    directory: "weknowthetruth",
    name: "We Know The Truth",
    tools: "Unity, Blender, FMOD",
    description:
      "Visual novel featuring a branching narrative and point-and-click explorable 3D environments with decision based consequences and multiple endings.",

    roles: [
      "Delivered on all programming, 3D art and audio requirements.",
      "Collaborated with a team who wrote and directed the game.",
      "Created scripting commands to allow writers to control game flow and on-screen scenes, characters and animations.",
    ],
    screenshots: 3,
  },
  {
    directory: "superstakeout",
    name: "Super Stakeout",
    tools: "Unity, Blender, FMOD",
    description:
      "First-person adventure game. A narrative-driven simulation of hardboiled, on-the-ground detective work set in 1985 as a string of serial murders rock San Francisco.",
    abouts: [
      "Programming, design, 3D modeling, music & SFX.",
      "Use clues from your mission case file to identify your target.",
      "Converse with your partner in your patrol car.",
      "In between missions, dialogue sequences fill in details about the case.",
    ],
    screenshots: 2,
  },
  {
    directory: "bloodshot",
    name: "Bloodshot",
    tools: "Unity, Blender, FMOD",
    description:
      "Isometric 3D stealth action game focused on disposing of enemies within a time-limit using limited resources.",
    abouts: [
      "Programming, design, 3D modeling, animation, music & SFX.",
      "Action game focused on a 'one against many' approach with limited resources. ",
      "Fast level-based gameplay with challenges for time limits, going undetected, or going all out.",
      "Varied enemy AI system with brutal difficulty, each short level requiring planning and replayability.",
    ],
    screenshots: 3,
  },
  {
    directory: "scramble",
    name: "Scramble",
    tools: "Unity, Blender, FMOD",
    description:
      "Local multiplayer top-down 3D beat-em-up game where up to four players face off in fast-paced combat using varied weapons and abilities.",
    abouts: [
      "Programming, design, 3D modeling, animation, music & SFX.",
      "Drop-in local multiplayer supporting several controllers for up to 4 players.",
      "Randomised weapon and upgrade drops for varied competition.",
    ],
    screenshots: 3,
  },
  {
    directory: "rhythmfish",
    name: "Rhythm Fish",
    tools: "Unity, Blender, FMOD",
    description:
      "Fishing-based rhythm with gameplay synchronised to music. Catch fish, upgrade your gear and travel to new islands.",
    abouts: [
      "Programming, design, 3D modeling, animation, music & SFX.",
      "Rhythm based gameplay in synchronisation with game music",
      "Upgrade paths and unlockable lofi music tracks.",
    ],
    screenshots: 3,
  },
  {
    directory: "airpusher",
    name: "Airpusher",
    tools: "Unity, Blender, FMOD",
    description:
      "First-person shooter/platformer with focused on agility and forward momentum. Features intricately designed levels with multiple routes, collectible power-ups and enemy encounters.",
    abouts: [
      "A speed-running game with a focus on replayability to find optimum routes.",
      "Dozens of hand-crafted levels with multiple pathways, unlockables and challenges.",
      "Limited resources including various different one-time use power-ups such as dash, stomp and slow-motion.",
      "Weapons systems with limited ammo to dispose of enemy threats.",
    ],
    screenshots: 3,
  },
  {
    directory: "latetaxi",
    name: "Late Taxi",
    tools: "Unity, Blender, FMOD",
    description:
      "A top-down driving simulator with interactive dialogue choices. Take passengers from destination to destination and learn more about the driver in the process.",
    abouts: [
      "Programming, design, 3D modeling, animation, music & SFX.",
      "City level map is regenerated at runtime.",
      "Endless gameplay loop continues until the player is ready to end their shift.",
    ],
    screenshots: 2,
  },
];
