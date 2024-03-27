import axios from "axios";

export const fetchEvent = async (provinceId, setEvent) => {
  try {
    const res = await axios.get(
      `http://localhost:8000/event?provinceId=${provinceId}`
    );
    setEvent(res?.data?.data);
  } catch (err) {
    console.log("error", err);
  }
};
