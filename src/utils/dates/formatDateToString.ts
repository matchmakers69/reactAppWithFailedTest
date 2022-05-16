import format from "date-fns/format";

export const dateOnlyString = (arg: Date | string | number) => format(new Date(arg), "dd/MM/yyyy");
