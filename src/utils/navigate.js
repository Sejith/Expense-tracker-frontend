const navigate = (history, path, data) => {
  // Directly use history.push to avoid recursion
  history.push({
    pathname: `/${path}`,
    state: { data },
  });
};

export default navigate;

