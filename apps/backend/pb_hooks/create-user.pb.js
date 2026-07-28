





onBootstrap((e) => {
  e.next();
  const email = "user@local.dev";
  const password = "Password1!";
  try {
    $app.findAuthRecordByEmail(
      "users",
      email
    );

    console.log(
      "Dashboard user already exists"
    );

  } catch (err) {

    const collection =
      $app.findCollectionByNameOrId(
        "users"
      );

    const user =
      new Record(collection);

    user.set(
      "email",
      email
    );

    user.set(
      "password",
      password
    );

    user.set(
      "passwordConfirm",
      password
    );

    $app.save(user);

    console.log(
      "Created dashboard user"
    );
  }
});

