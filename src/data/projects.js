export const TRACKS = {
  software: 'Software Engineering',
  embedded: 'Embedded & Hardware',
}

// Projects that don't live under the bradocola GitHub account (teammate repos,
// hardware builds with no repo, or in-progress work) — the GitHub-fetched grid
// on the Projects page covers everything else automatically.
//
// Each entry can carry any combination of `code`, `live`, and `video` — a card
// only shows the buttons for the links it actually has (some projects will
// only ever have a demo video, some only a live Vercel link, etc.).
export const FEATURED_PROJECTS = [
  {
    name: 'Makina Plus',
    track: TRACKS.software,
    tech: ['React', 'Node.js'],
    description: 'Ongoing full-stack platform, in active development.',
    status: 'In progress',
    live: 'https://makina-xi.vercel.app',
  },
  {
    name: 'FaceGame',
    track: TRACKS.software,
    tech: ['React Native', 'Expo', 'Node.js', 'C++', 'WebRTC'],
    description:
      'Real-time, multi-user mobile gaming app with low-latency peer-to-peer audio/video streaming and multiplayer state sync.',
  },
  {
    name: 'E7gezly Event',
    track: TRACKS.software,
    tech: ['React', 'Python', 'JavaScript', 'SQL'],
    description:
      'Event booking platform where organizers manage listings and users browse, search, and filter events. Led the team; built the admin dashboard and backend, including SQL triggers.',
    code: 'https://github.com/Astronaut1984/E7gezly-Event',
  },
  {
    name: 'Automated Car — CUERT Contest',
    track: TRACKS.embedded,
    tech: ['C', 'STM32'],
    description:
      'Deterministic navigation and sensor-based lane-detection logic for automated zone routing and timed obstacle stops — placed 4th of 48 teams.',
    code: 'https://github.com/FarahhYehya/AUTONMOUS-LOGIC-LANE-CAR-USING-STM32',
  },
  {
    name: 'CUBIX',
    track: TRACKS.embedded,
    tech: ['ESP32', 'C++'],
    description:
      'Connected system linking a hardware cube with desktop and mobile apps, built with a 11-member team. Firmware for real-time state detection and multi-device sync.',
    code: 'https://github.com/cubix-pack',
  },
  {
    name: 'Computer Architecture Project',
    track: TRACKS.embedded,
    tech: ['VHDL'],
    description:
      'Custom 5-stage pipelined RISC-like processor with data forwarding and static branch prediction.',
    code: 'https://github.com/M0hamed-Omar/Arch_Project',
  },
  {
    name: 'Game Boy Microprocessor Project',
    track: TRACKS.embedded,
    tech: ['Assembly'],
    description: 'A Game Boy built from basic components with custom-developed software.',
  },
]
