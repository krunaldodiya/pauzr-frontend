const getInitialScreen = authUser => {
  if (authUser) {
    const { status } = authUser;

    if (!status) {
      return "ManageProfileScreen";
    }

    return "HomeScreen";
  }

  return "GetStartedScreen";
};

export { getInitialScreen };
