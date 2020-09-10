export const createDefaultSlots = slotNames => {
  return slotNames.reduce(
    (slots, slotName) => ({ ...slots, [slotName]: slotName }),
    {}
  );
};

export const testSlotsAreEmpty = (mountFunction, slotNames) => {
  it("slots are empty by default", () => {
    const wrapper = mountFunction();
    for (const slotName of slotNames) {
      expect(wrapper.find(`#${slotName}`).text().length).toBe(0);
    }
  });
};

export const testSlotsAreRendered = (mountFunction, slotNames) => {
  it("slot data is rendered", () => {
    const slots = createDefaultSlots(slotNames);
    const wrapper = mountFunction({ slots });
    for (const slotName of slotNames) {
      expect(wrapper.find(`#${slotName}`).text()).toBe(slotName);
    }
  });
};
