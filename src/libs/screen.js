const getInitialScreen = authUser => {
  if (authUser) {
    const { status } = authUser;

    if (!status) {
      return 'EditProfile';
    }

    return 'Home';
  }

  return 'Intro';
};

export { getInitialScreen };
