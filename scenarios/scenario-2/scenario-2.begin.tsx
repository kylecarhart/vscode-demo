import React from "react";
import moment from "moment";
import { useAnalytics, removeHobby } from "hobby-lib";
import { uuid } from "uuidv4";
import { useSentry } from "use-sentry";

type Props = {
    name: string;
    hobbbies: string[];
};

export default function UserCard({ name, hobbbies }: Props) {
  const analytics = useAnalytics();

function handleClick() {
  hobbbies.forEach((h) => {
      // Some logic here...
        const stats = analytics(h); console.log(stats); removeHobby(h);
    });
  }

      return (<div>
        <div>
          <p>{name}</p><ol>
          {hobbbies.map((h) => (
            <li>{h}</li>
          ))}
        </ol>
    <button onClick={() => handleClick()}>Delete Hobbies</button>
        </div></div>
    );
}
