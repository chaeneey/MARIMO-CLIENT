import { useDaumPostcodePopup } from "react-daum-postcode";

export const useDaumPostcode = (
  onParsedComplete: (address: string, zoneCode: string) => void,
) => {
  const open = useDaumPostcodePopup(
    "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js",
  );

  const handleClick = () => {
    open({
      onComplete: (data) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
          if (data.bname !== "") extraAddress += data.bname;
          if (data.buildingName !== "") {
            extraAddress += extraAddress
              ? `, ${data.buildingName}`
              : data.buildingName;
          }
          fullAddress += extraAddress ? ` (${extraAddress})` : "";
        }

        // 파싱된 결과만 넘김
        onParsedComplete(fullAddress, data.zonecode);
      },
    });
  };

  return { handleClick };
};
