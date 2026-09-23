/** Link to the itinerary page opened at a 0-based day index, optionally focused on a 0-based block index. */
export function itineraryLink(dayIndex: number, blockIndex?: number): string {
  const base = `/itinerary?day=${dayIndex + 1}`;
  return blockIndex === undefined ? base : `${base}&block=${blockIndex + 1}`;
}

/** DOM id of a time block on the itinerary page, used as the scroll target for `itineraryLink`. */
export function blockElementId(dayIndex: number, blockIndex: number): string {
  return `day-${dayIndex + 1}-block-${blockIndex + 1}`;
}
