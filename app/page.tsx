import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-4 space-y-4 space-x-4">
      <p className="text-green-500 font-bold text-2xl">hello lingo</p>
      <Button variant="secondary">Click</Button>
      <Button variant="default">Click</Button>
      <Button variant="primary">Click</Button>
      <Button variant="primaryOutline">Click</Button>
      <Button variant="danger">Click</Button>
      <Button variant="dangerOutline">Click</Button>
    </div>
  );
}
