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
      <div className="card-infos">
        <span>Year: </span>
        <span>{birth_year}</span>
      </div>
      <div className="card-infos">
        <span>Awards: </span>
        <div>{awards}</div>
      </div>
      <div className="card-infos">
        <span>Biography: </span>
        <div>{biography}</div>
      </div>
      <div className="card-img">
        <img src={image} alt={name} />
      </div>
    </div>
  );
}
