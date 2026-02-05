interface Props {
  title: string;
  children: React.ReactNode;
}
export default function Section({ title, children }: Props) {
  return (
    <div className="form-block">
      <h2>{title}</h2>
      {children}
    </div>
  )
}