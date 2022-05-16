import { dateOnlyString } from "../formatDateToString";

describe("dateOnlyString", () => {
  it("should format date to given format", () => {
    const date = new Date("1979-02-28T00:00:00.000Z");
    const output = "28/02/1979";

    expect(dateOnlyString(date)).toEqual(output);
  });
});
