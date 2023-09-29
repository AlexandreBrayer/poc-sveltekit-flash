import { redirect as test } from "sveltekit-flash-message/server";

export const actions = {
  default: async (event) => {
    const data = await event.request.formData();
    const message = data.get("message");
    console.log(message);
    if (message) {
      throw test(302, "/message", {type: "success", message:message ?? "pls provide a message"}, event);
    }
  },
};
