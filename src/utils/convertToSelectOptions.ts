import { InvitationItemDetail, ValueType } from "@types";

type SelectOption = {
  value: ValueType;
};

export default function convertToSelectOptions(
  optionGroupList: InvitationItemDetail["optionGroupList"],
  optionType: string
): SelectOption[] {
  const group = optionGroupList.find((g) => g.optionType === optionType);
  if (!group) return [];

  return group.optionList.map((option) => ({
    value: {
      keyValue: option.name,
      subValue:
        option.optionDetail ??
        (option.price > 0 ? `+${option.price.toLocaleString()}원` : ""),
    },
  }));
}
