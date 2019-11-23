import React from "react";
import { Button, Text } from "native-base";
import authStore from "../../Stores/authStore";

function Logout() {
  return (
    <Button danger onPress={authStore.Logout}>
      <Text>Logout</Text>
    </Button>
  );
}

export default Logout;
