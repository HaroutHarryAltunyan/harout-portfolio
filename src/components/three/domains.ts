export const TWIN_DOMAINS = ["Cardiovascular", "Metabolic", "Musculoskeletal", "Recovery", "Activity", "Nutrition"] as const;
export type TwinDomain = (typeof TWIN_DOMAINS)[number];
