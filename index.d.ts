declare module 'add-to-calendar-button' {
  export type ISO8601Date = string;
  export type ISO8601Time = string;
  export interface Config {
    name?: string;
    description?: string;
    startDate: ISO8601Date | "today";
    endDate?: ISO8601Date;
    startTime?: ISO8601Time;
    endTime?: ISO8601Time;
    location?: string;
    options: ("Apple" | "Google" | "iCal" | "Microsoft365" | "MicrosoftTeams" | "Outlook.com" | "Yahoo")[],
    timeZone?: string;
    timeZoneOffset?: string;
    iCalFileName?: string;
    /**
     * By default, the dropdown list will be closed as soon as you mouse over
     * the background overlay. If you want it to instead close only when the
     * background overlay is clicked, set this to `"click"`.
     */
    trigger?: "click";
  }
  export function atcb_init(): any;
  export function addToCalendar (config: Config, placeBelow?: HTMLElement): void;
}