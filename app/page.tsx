import { Button } from "@/components/button";
import Image from "next/image";

export default async function Home() {
  const res = await fetch("https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10");
  const data = await res.json();
  console.log(data);

  // console.log(window)
  return (
   <div>
    <h1 className="text-2xl font-bold">Hello World</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius facere provident, atque rem maxime deserunt natus repellendus eaque tempore fuga numquam aut consequatur magnam quisquam, incidunt, explicabo voluptatibus vero? Ratione fugiat officiis voluptatem iure sapiente ea aut dignissimos doloremque itaque?
    </p>
    <Button/>
   </div>
  );
}
