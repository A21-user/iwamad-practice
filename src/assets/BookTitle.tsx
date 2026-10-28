type BookTitleProps = {
  title: string;
  author: string;
  coverUrl?: string; // ? значит необязательное поле
};

function BookTitle({ title, author, coverUrl }: BookTitleProps) {
  return (
    <div className="book">
      {coverUrl && <img src={coverUrl} alt={title} />}
      <h2>{title}</h2>
      <p>{author}</p>
    </div>
  );
}

export default BookTitle;