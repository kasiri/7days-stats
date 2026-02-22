// API Response Types
export interface Player {
  name: string;
  level: number;
  zombies: number;
  deaths: number;
}

export interface ServerStats {
  day: string;
  time: string;
  nextHordeDay: string;
  nextHordeIn: string;
  players: Player[];
}

export interface RankingData extends Player {
  opt?: unknown;
}

// Hook Types
export interface CountdownData {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  formatted: string;
}

// Component Props
export interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export interface PageHeaderProps {
  title: string;
  className?: string;
  h1ClassName?: string;
}

export interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export interface SectionContentProps {
  children: React.ReactNode;
  className?: string;
}

export interface ModItemProps {
  title: string;
  children: React.ReactNode;
  href?: string;
  hrefText?: string;
}

export interface FeatureListProps {
  items: string[];
}
