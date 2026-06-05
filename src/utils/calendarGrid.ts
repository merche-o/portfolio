export type CalendarCell = {
  date: Date;
  day: number;
  inMonth: boolean;
  isToday: boolean;
};

export type CalendarGridData = {
  weekdayLabel: string;
  dayNumber: number;
  monthLabel: string;
  weekdayHeaders: string[];
  cells: CalendarCell[];
};

const WEEKDAY_HEADERS = ["S", "M", "T", "W", "T", "F", "S"];

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function buildCalendarGrid(referenceDate = new Date()): CalendarGridData {
  const year = referenceDate.getFullYear();
  const month = referenceDate.getMonth();
  const today = new Date();

  const weekdayLabel = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
  })
    .format(referenceDate)
    .toUpperCase();

  const monthLabel = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(referenceDate);

  const firstOfMonth = new Date(year, month, 1);
  const startOffset = firstOfMonth.getDay();
  const gridStart = new Date(year, month, 1 - startOffset);

  const cells: CalendarCell[] = [];

  for (let i = 0; i < 42; i++) {
    const date = new Date(
      gridStart.getFullYear(),
      gridStart.getMonth(),
      gridStart.getDate() + i,
    );

    cells.push({
      date,
      day: date.getDate(),
      inMonth: date.getMonth() === month,
      isToday: isSameDay(date, today),
    });
  }

  return {
    weekdayLabel,
    dayNumber: referenceDate.getDate(),
    monthLabel,
    weekdayHeaders: WEEKDAY_HEADERS,
    cells,
  };
}
