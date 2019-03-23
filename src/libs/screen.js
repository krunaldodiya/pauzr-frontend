const getInitialScreen = authUser => {
  if (authUser) {
    const { status } = authUser;

    if (!status) {
      return 'EditProfile';
    }

    return 'Tabs';
  }

  return 'Intro';
};

export { getInitialScreen };
