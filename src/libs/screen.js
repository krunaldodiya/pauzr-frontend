const getInitialScreen = authUser => {
  if (authUser) {
    const { status } = authUser;

    if (!status) {
      return 'EditProfile';
    }

    return 'Timer';
  }

  return 'Intro';
};

export { getInitialScreen };
