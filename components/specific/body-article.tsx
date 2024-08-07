import React from 'react';

import Image from 'next/image';

export default function bodyArticle() {
  const image =
    'https://images.unsplash.com/photo-1496096265110-f83ad7f96608?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww';
  return (
    <React.Fragment>
      <div className="w-full flex flex-col items-center absolute top-80">
        <Image
          src={image}
          className="h-96 w-4/5 object-cover"
          alt="image article"
          height={600}
          width={600}
        />
        <div className=" py-16 px-32 space-y-8">
          <div>
            <h1 className="text-xl font-bold pb-5">1. Brainstorming</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              pariatur nemo laboriosam maiores dolores nobis dicta dolorem
              reiciendis minima labore. Vero nam, dolores adipisci illo fugit
              incidunt accusamus doloremque blanditiis. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ducimus officiis ipsum ex
              minima, placeat, quam aliquam temporibus itaque asperiores eos
              eligendi non alias velit praesentium tenetur distinctio ipsa quos
              odit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis consequatur dolor optio nam ex eum, dolores veritatis
              qui. Iure libero distinctio fuga exercitationem error ullam?
              Reprehenderit hic explicabo officia amet! Lorem ipsum dolor sit
              amet, consectetur adipisicing elit.
            </p>
          </div>

          <div>
            <h1 className="text-xl font-bold pb-5">1. Brainstorming</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              pariatur nemo laboriosam maiores dolores nobis dicta dolorem
              reiciendis minima labore. Vero nam, dolores adipisci illo fugit
              incidunt accusamus doloremque blanditiis. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ducimus officiis ipsum ex
              minima, placeat, quam aliquam temporibus itaque asperiores eos
              eligendi non alias velit praesentium tenetur distinctio ipsa quos
              odit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis consequatur dolor optio nam ex eum, dolores veritatis
              qui. Iure libero distinctio fuga exercitationem error ullam?
              Reprehenderit hic explicabo officia amet! Lorem ipsum dolor sit
              amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
