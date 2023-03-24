import { Select } from "@chakra-ui/react";

const DiscType = () => {
  return (
    <Select marginBottom={5}>
      <option value=""></option>
      <option value="overstable">Overstable</option>
      <option value="understable">Understable</option>
      <option value="driver">Driver</option>
      <option value="mid">Mid</option>
      <option value="putter">Putter</option>
      <option value="you-choose">You Choose</option>
    </Select>
  );
};

export default DiscType;
