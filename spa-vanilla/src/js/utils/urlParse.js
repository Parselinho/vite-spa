const urlParse = () => {
  const path = window.location.pathname
    .split("/")
    .filter((segment) => segment !== "");
  return {
    resource: path[0] || "",
    id: path[1] || null,
  };
};

export default urlParse;
