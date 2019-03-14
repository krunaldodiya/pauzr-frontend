const getInitialScreen = authUser => {
  if (authUser) {
    const { status } = authUser;

    if (!status) {
      return 'ManageProfile';
    }

    return 'Home';
  }

  return 'Intro';
};

export { getInitialScreen };
