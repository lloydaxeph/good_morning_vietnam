import type { ReactNode } from "react";
import type { City } from "../types";

interface CityPageProps {
  city: City;
  children: ReactNode;
}

/** Full-height scrollable page themed with the city's accent colours. */
export function CityPage({ city, children }: CityPageProps) {
  const cityClass = city === "Sapa" ? "page-sapa" : "page-hanoi";
  return <section className={`page ${cityClass}`}>{children}</section>;
}
