import { createContext, useContext } from "react";
import type { Activity, Day, TimeBlock } from "../../types";

export interface EditApi {
  editing: boolean;
  updateDay: (dayIndex: number, patch: Partial<Day>) => void;
  addDay: (afterIndex: number) => void;
  removeDay: (dayIndex: number) => void;
  updateBlock: (dayIndex: number, blockIndex: number, patch: Partial<TimeBlock>) => void;
  addBlock: (dayIndex: number, afterIndex: number) => void;
  removeBlock: (dayIndex: number, blockIndex: number) => void;
  updateActivity: (dayIndex: number, blockIndex: number, activityIndex: number, patch: Partial<Activity>) => void;
  addActivity: (dayIndex: number, blockIndex: number, afterIndex: number) => void;
  removeActivity: (dayIndex: number, blockIndex: number, activityIndex: number) => void;
}

const EditContext = createContext<EditApi | null>(null);

export function EditProvider({ value, children }: { value: EditApi; children: React.ReactNode }) {
  return <EditContext.Provider value={value}>{children}</EditContext.Provider>;
}

/** Edit-mode API; `editing` is false and mutators are no-ops when there's no provider (read-only pages). */
export function useEdit(): EditApi {
  return (
    useContext(EditContext) ?? {
      editing: false,
      updateDay: () => {},
      addDay: () => {},
      removeDay: () => {},
      updateBlock: () => {},
      addBlock: () => {},
      removeBlock: () => {},
      updateActivity: () => {},
      addActivity: () => {},
      removeActivity: () => {},
    }
  );
}
