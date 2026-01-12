type UserCardProps = {
  name: string;
  role: "admin" | "user";
};

type ButtonProps = {
  label: string;
  onClick: () => void;
};

function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}

function UserCard({ name, role }: UserCardProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Role: {role}</p>
      <Button label="Click me" onClick={() => console.log(name)} />
    </div>
  );
}

export default UserCard;
