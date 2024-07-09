export default function Image({
  srcSet = "",
  sizes = "(min-width: 768px) 50vw, 100vw",
  image = "",
  alt = "",
  loading = "lazy",
  classes = "",
}: {
  srcSet?: string;
  sizes?: string;
  image: string;
  alt?: string;
  loading?: "lazy" | "eager";
  classes?: string;
}) {
  return (
    <img
      srcSet={srcSet}
      sizes={sizes}
      src={image}
      alt={alt}
      loading={loading}
      className={classes}
    />
  );
}
