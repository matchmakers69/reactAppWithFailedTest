import { genderString } from "../formatGenderString";

describe("dateOnlyString", () => {
  it("should format gender to Female string", () => {
    const input = "F";
    const output = "Female";

    expect(genderString(input)).toEqual(output);
  });

  it("should format gender to Male string", () => {
    const input = "M";
    const output = "Male";

    expect(genderString(input)).toEqual(output);
  });
});
