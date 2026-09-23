/** Link to the itinerary page opened at a 0-based day index. */
export function itineraryLink(dayIndex: number): string {
  return `/itinerary?day=${dayIndex + 1}`;
}
