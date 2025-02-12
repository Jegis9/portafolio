import { Component } from "@angular/core";

@Component({
  selector: "app-hero",
  standalone: true,
  template: `
    <section class="bg-green-400 py-20">
      <div class="container mx-auto text-center">
        <div class="w-32 h-32 mx-auto bg-black rounded-full mb-6">
          <img src="img/Avatar.avif" alt="" class="rounded-full" />
        </div>
        <h1 class="text-4xl font-bold mb-2">Bienvenido a mi pagina</h1>
        <p class="text-xl">FullStack Developer</p>
        <div class="mx-auto" style="width: 50%;">
          <img src="img/stack.avif" alt="" />
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {}
