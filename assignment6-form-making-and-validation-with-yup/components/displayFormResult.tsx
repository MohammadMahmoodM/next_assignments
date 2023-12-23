export default function DisplayFormResult(props: any) {
  return (
    <div>
      Display Form Result
      <p>First Name: {props.ObjectContainingAllEntries.first_name}</p>
      <p>Last name: {props.ObjectContainingAllEntries.last_name}</p>
      <p>Father Name: {props.ObjectContainingAllEntries.son_daughter}</p>
      <p>Email: {props.ObjectContainingAllEntries.email}</p>
      <p>Phone: {props.ObjectContainingAllEntries.phone}</p>
      <p>CNIC: {props.ObjectContainingAllEntries.cnic}</p>
      <p>City: {props.ObjectContainingAllEntries.cityname}</p>
      <p>Street: {props.ObjectContainingAllEntries.street}</p>
      <p>Permanent Address: {props.ObjectContainingAllEntries.PermanentAddress}</p>
      <p>Message: {props.ObjectContainingAllEntries.message}</p>
    </div>
  );
}
