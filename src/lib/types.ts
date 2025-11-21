export type GradClass = "'21" | "'22" | "'23" | "'24" | "'25" | "'26";

export interface CollegeInfo {
  name: string;
  lat: number;
  lng: number;
  type: string;
  imageUrl: string;
  homepageUrl: string;
  stateOrCountry: string;
  isCampusPublic?: boolean;
  locationFocus?: "InCityNYC" | "InStateNYOther" | "OutOfStateUS" | "International" | "N/A";
}

export interface RawStudent {
  name: string;
  classYear: string;
  college: string;
  major: string;
  linkedin?: string;
  instagram?: string;
  github?: string;
  congratsCaption?: string;
}

export interface ProcessedStudent {
  id: number;
  originalIndex: number;
  seniorName: string;
  gradClass: GradClass;
  collegeName: string;
  collegeKey: string;
  collegeNameRaw: string;
  major: string;
  majorArea: string;
  lat: number;
  lng: number;
  collegeType: string;
  collegeImageUrl: string;
  collegeHomepageUrl: string;
  isCampusPublic: boolean;
  locationFocus: string;
  stateOrCountry: string;
  seniorPhotoUrl: string;
  seniorPhotoUrlPng: string;
  linkedInUrl?: string;
  instagramUrl?: string;
  githubUrl?: string;
  bioCaption?: string;
  isIndividuallyVisible: boolean;
  isVisible: boolean;
  honoraries?: string[];
}

export interface FilterState {
  gradClasses: Record<string, boolean>;
  locationFocus: Record<string, boolean>;
  majorAreas: Record<string, boolean>;
  stateCountry: Record<string, boolean>;
  searchQuery: string;
}

export type SortTarget = 'students' | 'colleges';
export type SortOption = 'name_asc' | 'name_desc' | 'count_asc' | 'count_desc' | 'grad_first' | 'grad_last';
