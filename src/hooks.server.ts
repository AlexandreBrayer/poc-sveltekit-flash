export async function handle({ event, resolve }) {
  console.log("server side hook");
  event.cookies.set("test", "test", {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    sameSite: "lax",
    secure: true,
  });
  const response = await resolve(event);

  return response;
}
