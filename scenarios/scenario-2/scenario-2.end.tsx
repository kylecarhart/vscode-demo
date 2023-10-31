import { removeHobby, useAnalytics } from "hobby-lib";
import React from "react";

type Props = {
  name: string;
  hobbies: string[];
};

/**
 * UserCard that displays user name and hobbies and allows
 * user to delete hobbies.
 * @param props UserCard props
 * @returns UserCard component
 */
export default function UserCard({ name, hobbies }: Props) {
  const analytics = useAnalytics();

  function handleDelete() {
    hobbies.forEach((hobby) => {
      // Some logic here...
      const stats = analytics(hobby);
      console.log(stats);
      removeHobby(hobby);
    });
  }

  return (
    <div>
      <div>
        <p>{name}</p>
        <ol>
          {hobbies.map((hobby) => (
            <li>{hobby}</li>
          ))}
        </ol>
        <button onClick={() => handleDelete()}>Delete Hobbies</button>
      </div>
    </div>
  );
}
