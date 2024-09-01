import { json, type MetaFunction } from "@remix-run/node";
import { PrismaClient } from '@prisma/client'
import { useLoaderData } from "@remix-run/react";

const prisma = new PrismaClient()

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const list = await prisma.items.findMany();
  return json({ list });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Welcome to Remix</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        {data.list.map((item) => {
          return <li>{item.name}</li>
        })}
      </ul>
    </div>
  );
}
