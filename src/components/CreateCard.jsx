export default function CreateCard({
  name,
  birth_year,
  awards,
  biography,
  image,
}) {
  return (
    <div className="card-act">
      <h2>{name}</h2>
      <div>{birth_year}</div>
      <div>{awards}</div>
      <div>{biography}</div>
      <img src={image} alt={name} />
    </div>
  );
}
