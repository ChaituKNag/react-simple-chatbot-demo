import React from "react";

const usersUrl = "https://jsonplaceholder.typicode.com/users";

const ListUsers = ({ triggerNextStep, steps }) => {
  const [users, setUsers] = React.useState(null);
  React.useEffect(() => {
    console.log(steps);
    fetch(usersUrl)
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        triggerNextStep();
      });
  }, [triggerNextStep, steps]);
  return (
    <div>
      <h1>Users list</h1>
      <ul>{users && users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  );
};

const steps = [
  {
    id: "Welcome",
    message: "Welcome to PepsiCo ChatBot",
    trigger: "What do you want to do today?"
  },
  {
    id: "What do you want to do today?",
    message: "What do you want to do today?",
    trigger: "Choose an action"
  },
  {
    id: "Choose an action",
    options: [
      {
        value: "users",
        label: "Fetch Users",
        trigger: "Display users"
      },
      { value: "nothing", label: "Nothing else", trigger: "Done" }
    ]
  },
  {
    id: "Display users",
    component: <ListUsers />,
    waitAction: true,
    trigger: "Choose an action"
  },
  {
    id: "Done",
    message: "Thanks for your time!",
    trigger: "Restart"
  },
  {
    id: "Restart",
    options: [
      {
        value: "restart",
        label: "Restart Chat",
        trigger: "Choose an action"
      },
      {
        value: "end",
        label: "End Chat",
        trigger: "Done"
      }
    ]
  }
];

export { steps };
