"use client";

import { useMemo } from "react";
import { profile } from "@/data/profile";
import { buildCalendarGrid } from "@/utils/calendarGrid";

export function CalendarWidget() {
  const calendar = useMemo(() => buildCalendarGrid(), []);

  const ariaDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

  return (
    <a
      href={profile.calendly}
      target="_blank"
      rel="noopener noreferrer"
      className="ios-widget-square ios-grid-calendar ios-calendar-widget group"
      aria-label={`Book a meeting on Calendly for ${ariaDate}`}
    >
      <div className="ios-calendar-widget-header">
        <span className="ios-calendar-widget-weekday">
          {calendar.weekdayLabel}
        </span>
        <span className="ios-calendar-widget-day">{calendar.dayNumber}</span>
      </div>

      <div className="ios-calendar-widget-weekdays" aria-hidden>
        {calendar.weekdayHeaders.map((label, index) => (
          <span
            key={`${label}-${index}`}
            className="ios-calendar-widget-weekday-cell"
          >
            {label}
          </span>
        ))}
      </div>

      <div className="ios-calendar-widget-days" aria-hidden>
        {calendar.cells.map((cell) => (
          <span
            key={cell.date.toISOString()}
            className={`ios-calendar-widget-day-cell ${
              !cell.inMonth ? "ios-calendar-widget-day-cell--muted" : ""
            } ${cell.isToday ? "ios-calendar-widget-day-cell--today" : ""}`}
          >
            <span className="ios-calendar-widget-day-number">{cell.day}</span>
          </span>
        ))}
      </div>
    </a>
  );
}
