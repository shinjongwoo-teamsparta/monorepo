// import { userSchema } from "@teamsparta-japan/shared1/src/schema/user";
// import type { User } from "@teamsparta-japan/shared1/src/schema/user";
import { userSchema } from "@teamsparta-japan/shared1";
import type { User } from "@teamsparta-japan/shared1";
// import { userSchema } from "@teamsparta-japan/shared1";

export default function Home() {
  const rawUser: User = {
    name: "John Doe",
    age: 42,
    email: "john@doe.com",
    timestamp: new Date(),
  }

  const user = userSchema.parse(rawUser);
  console.log(`${user.name}, ${user.age}\n ${user.timestamp.toLocaleString()}`);

  return (
    <div className="bg-red-500">
      <h1 className="text-2xl font-bold">Hello World</h1>
      <p className="text-sm text-gray-500">This is a paragraph</p>
    </div>
  );
}
