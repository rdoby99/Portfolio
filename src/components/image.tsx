Image.defaultProps = {
  sizes: "(min-width: 768px) 50vw, 100vw",
  loading: "lazy",
  alt: "",
};

export default function Image(props: any) {
  return (
    <img
      srcSet={props.srcSet}
      sizes={props.sizes}
      src={props.image}
      alt={props.alt}
      loading={props.loading}
      className={props.classes}
    />
  );
}
