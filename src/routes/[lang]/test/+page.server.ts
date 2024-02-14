
export const load = (async ({url}) => {
    const pathName = url.pathname;
    console.log("server side hook");
    return {
        pathName,
    };
})
