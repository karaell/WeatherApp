import { format } from "date-fns";

export function convertDateTime(unixTime) {
  try {
    const time = unixTime * 1000;

    return format(time, "EEEE hh:mm aaa");
  } catch (err) {
    console.log(err);
  }
}

export function convertTime(unixTime) {
  try {
    const time = unixTime * 1000;

    return format(time, "hh:mm aaa");
  } catch (err) {
    console.log(err);
  }
}

export function convertDate(unixTime) {
  try {
    const date = unixTime * 1000;

    return format(date, "d LLL");
  } catch (err) {
    console.log(err);
  }
}
