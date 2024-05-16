export default function Home() {
  return (
    <div>
      <div>{process.env.NEXT_PUBLIC_STATIC_VALUE}</div>
      <div>{process.env.NEXT_PUBLIC_INJECTION_VALUE}</div>
      <div>{process.env.NEXT_PUBLIC_INJECTION_VALUE2}</div>
    </div>
  );
}
