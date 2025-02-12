import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  standalone: true,
  template: `
    <header class="bg-black text-white p-4">
      <nav class="container mx-auto flex justify-between items-center">
        <div class="text-2xl font-bold">🗂️</div>
        <div class="space-x-6">
          <a href="#about" class="hover:text-green-400">Sobre mi</a>
          <a href="#projects" class="hover:text-green-400">Proyectos</a>
          <a href="#contact" class="underline hover:text-green-100 "
            >Contacto</a
          >
        </div>
      </nav>
    </header>
  `,
})
export class HeaderComponent {}
