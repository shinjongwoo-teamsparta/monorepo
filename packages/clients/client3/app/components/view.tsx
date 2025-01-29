"use client"

import { User, userSchema } from "@teamsparta-japan/shared1"
import { useState } from "react";

const default_value: Readonly<User> = {
  name: "",
  age: 0,
  email: "",
  timestamp: new Date(),
};

function View() {
  const [user, setUser] = useState<User>(default_value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = userSchema.safeParse(user);
    if (!result.success) {
      console.log("Form data is invalid");
      console.log(result.error);
    } else {
      console.log("Form data is valid");
      console.log(user);
    }
  };

  return (
    <form action="" onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input type="text" id="name" name="name" onChange={(e) => setUser(prev => ({ ...prev, name: e.target.value }))} />
      <input type="number" id="age" name="age" onChange={(e) => setUser(prev => ({ ...prev, age: Number(e.target.value) }))} />
      <input type="email" id="email" name="email" onChange={(e) => setUser(prev => ({ ...prev, email: e.target.value }))} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default View;